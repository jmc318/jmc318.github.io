"""Fetches each school's official calendar feed and merges them into one
combined sports.ics file, tagging every event with a CATEGORIES value equal to
the school name (e.g. "Wisconsin"). Outlook/iCal import CATEGORIES from a
subscribed .ics as a Category on each event; assigning a color to that
category name locally (one-time, per user) then color-codes every game from
that school.

Wisconsin and Michigan State have real official ICS feeds (FEEDS below) -- if
either of those fails to fetch or returns 0 events, the whole run aborts
without writing sports.ics, so a temporary outage never overwrites the last
known-good combined file with an empty/partial one.

Purdue has no working calendar-subscription feed (confirmed dead end -- see
Sports Calendar/CLAUDE.md), so its games are scraped directly from Purdue's
own schedule pages instead (PURDUE_PAGES below). Every run first re-checks
whether Purdue's official feed has come back online (try_purdue_official_feed)
and prefers it over the scraper if so -- cheap to keep checking, and a real
feed is more durable than a scraper if one ever becomes available again.
Because the scraper depends on Purdue's page layout rather than a stable API
contract, a Purdue failure is NOT treated the same as a Wisconsin/Michigan
State feed failure: it does NOT abort the run. Instead it falls back to
whatever Purdue events were already in the last-published sports.ics, so
Wisconsin/Michigan State keep updating normally and Purdue just goes stale
(rather than disappearing) until the scraper is fixed.

TV network (added 2026-09-06): when a game's broadcast network is known, it's
appended to the event title as "(TV: NBC)" etc., so it's visible on the
calendar itself rather than only in the event description. For
Wisconsin/Michigan State this is read off a "TV: ..." field already present in
their feed's DESCRIPTION (see extract_tv_network); for Purdue it's scraped off
the schedule page's network-logo link (see extract_purdue_network). Omitted
entirely for games where a network hasn't been assigned yet.

Exit codes (read by the GitHub Actions workflow to decide whether to fail the
run and trigger Jeff's failure-notification email, added 2026-08-19):
0 = totally clean run. 1 = fatal abort, nothing written (Wisconsin/Michigan
State outage). 2 = sports.ics was still written and committed, but at least
one Purdue sport fell back to stale carried-forward data. The workflow marks
the whole run as failed on either 1 or 2 -- it still commits+pushes whatever
was produced first (a no-op in the code-1 case, since nothing new was
written), then fails the job afterward on purpose purely so GitHub's own
scheduled-workflow-failure email fires.
"""
import gzip
import re
import sys
import urllib.request
from datetime import datetime, timedelta
from zoneinfo import ZoneInfo

from bs4 import BeautifulSoup

# (display label, category/school name written into each event, feed URL)
FEEDS = [
    ("Wisconsin Football", "Wisconsin", "https://uwbadgers.com/api/v2/Calendar/subscribe?type=ics&sportId=1&scheduleId=694"),
    ("Wisconsin Men's Basketball", "Wisconsin", "https://uwbadgers.com/api/v2/Calendar/subscribe?type=ics&sportId=3&scheduleId=765"),
    ("Michigan State Football", "Michigan State", "https://msuspartans.com/api/v2/Calendar/subscribe?type=ics&sportId=4"),
    ("Michigan State Men's Basketball", "Michigan State", "https://msuspartans.com/api/v2/Calendar/subscribe?type=ics&sportId=6"),
]

# (display label, category/school name, short UID tag for this sport, schedule page to scrape)
# The UID tag disambiguates which sport a carried-forward fallback event
# belongs to (see load fallback logic in main()) -- CATEGORIES alone isn't
# enough since both Purdue sports share CATEGORIES:Purdue.
PURDUE_PAGES = [
    ("Purdue Football", "Purdue", "fb", "https://purduesports.com/sports/football/schedule"),
    ("Purdue Men's Basketball", "Purdue", "mbb", "https://purduesports.com/sports/mens-basketball/schedule"),
]

# TV fallback (added 2026-11-06): Michigan State's basketball ICS feed carries
# no "TV:" field at all (0 of 54 games, confirmed -- e.g. the 11/5 Toledo game
# streamed on Peacock but the feed only listed "Streaming Audio"), while MSU's
# own schedule web page shows a network logo on nearly every game. For any feed
# event still missing a network, it's looked up on that sport's schedule page by
# game date. Best-effort only: if the page can't be read, the run continues and
# those games just show no network (never aborts, never fails the run).
TV_FALLBACK_PAGES = {
    "Michigan State Football": "https://msuspartans.com/sports/football/schedule",
    "Michigan State Men's Basketball": "https://msuspartans.com/sports/mens-basketball/schedule",
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
}

CALNAME = "Wisconsin, Purdue & Michigan State Football/Basketball"
OUTPUT_FILE = "sports.ics"
# Same content, second address. Outlook.com subscriptions are fetched/cached by
# Microsoft's servers; a fresh URL forces a fresh fetch (2026-10-15).
MIRROR_FILE = "sports-calendar.ics"
# Third address (2026-10-23): Outlook.com was again holding stale TBD copies, so
# a new filename forces a fresh fetch. Add further names here the same way.
EXTRA_FILES = ["sports-games.ics"]
NTFY_URL = "https://ntfy.sh/jeff-claude-3001"
EASTERN = ZoneInfo("America/New_York")
UTC = ZoneInfo("UTC")


def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read()
        if resp.info().get("Content-Encoding") == "gzip":
            raw = gzip.decompress(raw)
        return raw.decode("utf-8")


def extract_tv_network(description_line):
    """Wisconsin/Michigan State's SIDEARM feed DESCRIPTION field packs several
    labeled fields onto one line separated by literal '\\n' (backslash-n text,
    not real newlines -- that's SIDEARM's own escaping, confirmed by fetching
    the feed directly), e.g. '...\\nTV: NBC/Peacock\\nRadio: ...'. Pulls out the
    network name after 'TV: ' if that field is present (it's omitted entirely
    on games where a network hasn't been assigned yet)."""
    m = re.search(r"\\nTV:\s*([^\\]+?)(?:\\n|$)", description_line)
    return m.group(1).strip() if m else None


# Ordered (keyword, display name) rules for turning a logo *filename* into a
# network name. Order matters: more specific names first (ESPN2 before ESPN,
# Peacock before NBC, CBS Sports Network before CBS).
NETWORK_KEYWORDS = [
    ("peacock", "Peacock"), ("espn2", "ESPN2"), ("espnu", "ESPNU"),
    ("espnews", "ESPNEWS"), ("espnplus", "ESPN+"), ("espn", "ESPN"),
    ("cbssportsnetwork", "CBS Sports Network"), ("cbssn", "CBS Sports Network"),
    ("cbs", "CBS"), ("fs1", "FS1"), ("fs2", "FS2"), ("btn", "BTN"),
    ("bigtennetwork", "BTN"), ("b1g", "B1G+"), ("bigtenplus", "B1G+"),
    ("trutv", "truTV"), ("tnt", "TNT"), ("tbs", "TBS"), ("youtube", "YouTube"),
    ("primevideo", "Prime Video"), ("amazon", "Prime Video"), ("nbc", "NBC"),
    ("abc", "ABC"), ("fox", "FOX"),
]


def normalize_network(raw):
    """Clean up a network name. SIDEARM feeds/pages sometimes give a logo's
    image filename instead of a name (seen live: 'NBCUniversal_Peacock_',
    'espn-logo-espn-symbol-meaning-png-logo-0', 'TNT_Logo_2016',
    'Peacock_NBCSN.jpg') and occasionally the literal text 'None'. Real
    names typed by the school ('NBC/Peacock', 'CBS Sports Network') are left
    exactly as-is. Returns None when there's no real network."""
    if not raw:
        return None
    name = raw.strip()
    if name.lower() in ("", "none", "null", "tba", "tbd", "n/a"):
        return None
    looks_like_filename = (
        "_" in name or re.search(r"logo|\.(png|jpe?g|svg|gif|webp)$", name, re.I)
        or (" " not in name and "-" in name)
    )
    if not looks_like_filename:
        return name
    # Drop the file extension BEFORE matching -- "..._schedules.png" squashed
    # together contains "espn" (caught in testing 2026-11-06: BTN games were
    # coming out as ESPN).
    cleaned = re.sub(r"\.(png|jpe?g|svg|gif|webp)$", "", name, flags=re.I)
    key = re.sub(r"[^a-z0-9]", "", cleaned.lower().replace("+", "plus"))
    for keyword, display in NETWORK_KEYWORDS:
        if keyword in key:
            return display
    cleaned = re.sub(r"[_-]+", " ", cleaned).strip()
    print(f"NOTE: unrecognized network logo {raw!r}; showing it as {cleaned!r} "
          f"(add it to NETWORK_KEYWORDS)")
    return cleaned or None


def tidy_tv_in_summary(event):
    """Final pass over every event at write time: normalize the '(TV: ...)'
    part of the title (also fixes carried-forward events published before
    normalize_network existed), or drop it if it's not a real network."""
    def repl(m):
        network = normalize_network(m.group(1))
        return f" (TV: {network})" if network else ""
    return re.sub(r" \(TV: ([^)\r\n]*)\)", repl, event)


MONTHS = {m: i for i, m in enumerate(
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], 1)}


def scrape_page_networks(url):
    """Read MSU's (new-platform SIDEARM) schedule page and return
    {(month, day): network} for every game card that shows a TV logo. Each game
    is a 'game card'; its date appears as e.g. 'Nov 5 (Thu)' and its network
    only as an <img alt="TV Logo"> whose image filename names the network
    (e.g. '.../images/2026/1/12/Peacock_NBCSN.jpg') -- the alt text itself is
    always the generic 'TV Logo', so the filename is the only clue."""
    html = fetch(url)
    cards = html.split('data-test-id="s-game-card-standard__root"')[1:]
    networks = {}
    for card in cards:
        text = re.sub(r"<[^>]+>", " ", card)
        date_m = re.search(r"\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\s*\((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)\)", text)
        if not date_m:
            continue
        tv_section = card.find("header-tv-and-radio")
        if tv_section < 0:
            continue
        for img in re.findall(r"<img[^>]*>", card[tv_section:]):
            if 'alt="TV Logo"' not in img:
                continue
            file_m = re.search(r"images%2F(?:[^&\"]*?%2F)?([^%&\"/]+\.(?:png|jpe?g|svg|gif|webp))", img, re.I)
            network = normalize_network(file_m.group(1)) if file_m else None
            if network:
                networks[(MONTHS[date_m.group(1)], int(date_m.group(2)))] = network
            break
    return networks


def event_local_date(event):
    """(month, day) of an event's start in Eastern time (MSU's own zone, which
    is what its schedule page shows)."""
    m = re.search(r"^DTSTART(;VALUE=DATE)?(?:;TZID=[^:]+)?:(\d{8})(T\d{6}Z?)?", event, re.M)
    if not m:
        return None
    if m.group(3) and m.group(3).endswith("Z"):
        dt = datetime.strptime(m.group(2) + m.group(3)[:-1], "%Y%m%dT%H%M%S").replace(tzinfo=UTC).astimezone(EASTERN)
    else:
        dt = datetime.strptime(m.group(2), "%Y%m%d")
    return dt.month, dt.day


def fill_missing_tv(label, events):
    """For a feed whose events are missing a network, look each one up on that
    sport's schedule page (TV_FALLBACK_PAGES) by game date and add it to the
    title. Never raises -- a page problem only means no extra networks."""
    url = TV_FALLBACK_PAGES.get(label)
    missing = [e for e in events if not re.search(r"^SUMMARY:.*\(TV: ", e, re.M)]
    if not url or not missing:
        return events
    try:
        networks = scrape_page_networks(url)
    except Exception as e:
        print(f"WARNING: {label}: couldn't read schedule page for TV networks ({e})", file=sys.stderr)
        return events
    out, filled = [], 0
    for ev in events:
        if ev in missing:
            network = networks.get(event_local_date(ev))
            if network:
                ev = re.sub(r"^(SUMMARY:.*?)(\r?)$",
                            lambda m, n=network: f"{m.group(1)} (TV: {n}){m.group(2)}",
                            ev, count=1, flags=re.M)
                filled += 1
        out.append(ev)
    print(f"{label}: added TV network from schedule page for {filled} of {len(missing)} game(s) missing one "
          f"({len(networks)} networks found on page)")
    return out


def inject_tv_network_into_summary(lines):
    """Given a VEVENT's raw lines (pre-CATEGORIES), append the TV network
    (read off the DESCRIPTION field) onto the SUMMARY line, so it shows up in
    the calendar's event title/listing itself instead of being buried in the
    description that only shows once an event is opened."""
    network = None
    for line in lines:
        if line.startswith("DESCRIPTION:"):
            network = normalize_network(extract_tv_network(line))
            break
    if not network:
        return lines
    return [
        f"{line} (TV: {network})" if line.startswith("SUMMARY:") else line
        for line in lines
    ]


def extract_vevents(ics_text, category):
    """Pull every BEGIN:VEVENT..END:VEVENT block out of a raw .ics feed,
    append the TV network (if known) onto the title, and tag it with
    CATEGORIES:<category>."""
    events = []
    current = []
    inside = False
    for line in ics_text.splitlines():
        stripped = line.strip()
        if stripped == "BEGIN:VEVENT":
            inside = True
            current = [line]
        elif stripped == "END:VEVENT":
            current = inject_tv_network_into_summary(current)
            current.append(f"CATEGORIES:{category}")
            current.append(line)
            events.append("\r\n".join(current))
            inside = False
        elif inside:
            current.append(line)
    return events


def extract_vevents_by_uid_prefix(ics_text, uid_prefix):
    """Like extract_vevents, but for re-reading an already-built sports.ics
    and filtering to events whose UID starts with uid_prefix -- used to carry
    forward one Purdue sport's last-known-good events when a fresh scrape of
    just that sport fails (UID prefix, not CATEGORIES, because both Purdue
    sports share CATEGORIES:Purdue and would otherwise get mixed up)."""
    matches = []
    for block in re.findall(r"BEGIN:VEVENT.*?END:VEVENT", ics_text, re.DOTALL):
        if f"UID:{uid_prefix}" in block:
            matches.append(block.strip())
    return matches


def ics_escape(text):
    return text.replace("\\", "\\\\").replace(",", "\\,").replace(";", "\\;")


def parse_event_time(text):
    """'7:00 PM EDT' -> (19, 0); 'TBA' or anything unparseable -> None."""
    m = re.search(r"(\d{1,2}):(\d{2})\s*(AM|PM)", text or "", re.IGNORECASE)
    if not m:
        return None
    hour = int(m.group(1)) % 12
    if m.group(3).upper() == "PM":
        hour += 12
    return hour, int(m.group(2))


def extract_purdue_network(item):
    """Purdue's schedule page has no separate labeled 'TV' field -- when a
    network is assigned, it shows up as the first link in
    div.schedule-event-item-links__list, an <a aria-label="Read more - ...">
    wrapping an <img alt="{Network} Logo"> (confirmed live: alt was "BTN Logo"
    for one game and bare "FOX" for another -- inconsistent, so just strip a
    trailing "Logo" if present rather than assuming the exact format). That
    same list also always has a radio-station link later on whose image has a
    generic alt="header-logo" (the station's own logo file, not a network
    name) -- skipped so it's never mistaken for the TV network. Returns None
    if no network has been assigned yet (common for games far out)."""
    for a in item.select("div.schedule-event-item-links__list a"):
        label = a.get("aria-label", "")
        if not label.startswith("Read more"):
            continue  # e.g. "Live Stats - ...", not a network link
        img = a.select_one("img")
        alt = (img.get("alt") or "").strip() if img else ""
        if not alt or alt.lower() == "header-logo":
            continue
        return re.sub(r"\s*Logo$", "", alt, flags=re.IGNORECASE)
    return None


def scrape_purdue_schedule(label, category, uid_tag, url):
    sport_name = label.replace("Purdue ", "", 1)
    html = fetch(url)
    soup = BeautifulSoup(html, "html.parser")

    title = soup.title.get_text(strip=True) if soup.title else ""
    year_match = re.search(r"(\d{4})", title)
    if not year_match:
        raise ValueError(f"{label}: couldn't find a season year in page title {title!r}")
    year = int(year_match.group(1))

    events = []
    prev_month = None
    for item in soup.select("div.schedule-event-item"):
        day_el = item.select_one(".schedule-event-date__day")
        divider_el = item.select_one(".schedule-default-event__divider")
        title_el = item.select_one(".schedule-default-event__title")
        if not (day_el and divider_el and title_el):
            continue  # not a real game row (e.g. a tournament wrapper)

        month_day_text = day_el.get_text(strip=True)  # e.g. "Sep 4"
        try:
            # Append a placeholder year -- the page never gives one, and the
            # real year is worked out below via prev_month rollover anyway.
            # Parsing "%b %d" alone triggers a DeprecationWarning on newer
            # Python (ambiguous day-of-month without a year); this sidesteps
            # it without changing behavior.
            month_day = datetime.strptime(f"{month_day_text} 1900", "%b %d %Y")
        except ValueError:
            continue  # unexpected date format -- skip rather than guess

        if prev_month is not None and month_day.month < prev_month:
            year += 1  # crossed a New Year's Day (e.g. Dec game -> Jan game)
        prev_month = month_day.month

        is_home = divider_el.get_text(strip=True).lower().startswith("vs")
        opponent = title_el.get_text(strip=True)
        loc_el = item.select_one(".schedule-event-location")
        location = loc_el.get_text(strip=True) if loc_el else ""
        result_el = item.select_one(".schedule-event-item-result__label")
        time_text = result_el.get_text(strip=True) if result_el else ""
        link_el = item.select_one("[entity-id]")
        entity_id = link_el.get("entity-id") if link_el else f"{month_day_text}-{opponent}"

        summary = f"Purdue {sport_name} {'vs.' if is_home else 'at'} {opponent}"
        network = extract_purdue_network(item)
        if network:
            summary += f" (TV: {network})"
        uid = f"purdue-{uid_tag}-{re.sub(r'[^A-Za-z0-9-]', '', str(entity_id))}@purduesports.com"

        lines = [
            "BEGIN:VEVENT",
            f"UID:{uid}",
            f"DTSTAMP:{datetime.now(UTC).strftime('%Y%m%dT%H%M%SZ')}",
        ]

        parsed_time = parse_event_time(time_text)
        if parsed_time:
            hour, minute = parsed_time
            start_local = datetime(year, month_day.month, month_day.day, hour, minute, tzinfo=EASTERN)
            start_utc = start_local.astimezone(UTC)
            end_utc = start_utc + timedelta(hours=3)  # approx game length
            lines.append(f"DTSTART:{start_utc.strftime('%Y%m%dT%H%M%SZ')}")
            lines.append(f"DTEND:{end_utc.strftime('%Y%m%dT%H%M%SZ')}")
        else:
            start_date = datetime(year, month_day.month, month_day.day)
            end_date = start_date + timedelta(days=1)
            lines.append(f"DTSTART;VALUE=DATE:{start_date.strftime('%Y%m%d')}")
            lines.append(f"DTEND;VALUE=DATE:{end_date.strftime('%Y%m%d')}")

        if location:
            lines.append(f"LOCATION:{ics_escape(location)}")
        lines.append(f"SUMMARY:{ics_escape(summary)}")
        lines.append(f"URL:{url}")
        lines.append(f"CATEGORIES:{category}")
        lines.append("END:VEVENT")
        events.append("\r\n".join(lines))

    return events


def try_purdue_official_feed(label, category, sport_keyword):
    """Best-effort check whether Purdue's classic SIDEARM calendar API (the
    same one Wisconsin/Michigan State use) has come back online for this
    sport. Confirmed dead as of 2026-08-12 -- every sportId 1-12 returns 404,
    meaning the route doesn't exist on Purdue's backend at all right now, not
    just an outage. Cheap to keep re-checking every run (a couple dozen quick
    404s, a few seconds total) so that if Purdue ever adds this route back,
    the calendar switches to it automatically -- a real feed is more durable
    than scraping a page layout that could change. sport_keyword guards
    against matching the wrong sport's feed if a sportId ever starts
    resolving to *something* unexpected.
    Returns an events list if a working, matching feed is found, else None.
    """
    for sport_id in range(1, 13):
        url = f"https://purduesports.com/api/v2/Calendar/subscribe?type=ics&sportId={sport_id}"
        try:
            text = fetch(url)
        except Exception:
            continue
        if sport_keyword.lower() not in text.lower():
            continue
        events = extract_vevents(text, category)
        if events:
            print(f"NOTE: Purdue's official calendar API is now responding for {label} "
                  f"(sportId={sport_id})! Using it instead of the scraper this run -- "
                  f"consider moving this into FEEDS permanently.")
            return events
    return None


def keep_known_times(events, previous_ics):
    """Purdue's schedule page drops a game's clock time once the game has been
    played (the same label holds the result instead), so a finished game would
    otherwise flip from timed to all-day on the next run (confirmed 2026-10-15).
    If a scraped event is all-day but the last-published file has the same UID
    as a timed event, keep the published (timed) version. Games that were
    never timed (genuine TBA) are untouched. Returns (events, count_kept)."""
    out, kept = [], 0
    for ev in events:
        if "DTSTART;VALUE=DATE:" in ev:
            m = re.search(r"^UID:(.*?)\r?$", ev, flags=re.MULTILINE)
            if m:
                prev = extract_vevents_by_uid_prefix(previous_ics, m.group(1).strip())
                if prev and re.search(r"^DTSTART(;TZID=[^:]+)?:\d{8}T\d{6}", prev[0], flags=re.MULTILINE):
                    out.append(prev[0])
                    kept += 1
                    continue
        out.append(ev)
    return out, kept


def mark_time_tbd(event):
    """Append ' (time TBD)' to the SUMMARY of an all-day event (DTSTART with
    VALUE=DATE, i.e. the school hasn't posted a game time yet), so an all-day
    entry reads as 'time not announced' instead of looking like a mistake.
    Idempotent (safe on carried-forward events that already have the label);
    once a school posts a time the event is rebuilt as a timed event and the
    label naturally disappears."""
    if "DTSTART;VALUE=DATE:" not in event or "(time TBD)" in event:
        return event
    return re.sub(r"^(SUMMARY:.*?)(\r?)$", r"\1 (time TBD)\2", event, count=1, flags=re.MULTILINE)


VTIMEZONE_EASTERN = (
    "BEGIN:VTIMEZONE\r\n"
    "TZID:America/New_York\r\n"
    "X-LIC-LOCATION:America/New_York\r\n"
    "BEGIN:DAYLIGHT\r\n"
    "TZOFFSETFROM:-0500\r\n"
    "TZOFFSETTO:-0400\r\n"
    "TZNAME:EDT\r\n"
    "DTSTART:19700308T020000\r\n"
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\r\n"
    "END:DAYLIGHT\r\n"
    "BEGIN:STANDARD\r\n"
    "TZOFFSETFROM:-0400\r\n"
    "TZOFFSETTO:-0500\r\n"
    "TZNAME:EST\r\n"
    "DTSTART:19701101T020000\r\n"
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\r\n"
    "END:STANDARD\r\n"
    "END:VTIMEZONE\r\n"
)


def utc_to_eastern_tzid(event):
    """Rewrite timed DTSTART/DTEND lines from bare UTC ('...T210000Z') to
    Eastern local time with an explicit TZID ('DTSTART;TZID=America/New_York:
    ...T170000'). Classic Outlook was confirmed (2026-09-26) to show
    bare-UTC subscribed events in the all-day strip instead of the timed grid;
    TZID + a VTIMEZONE definition in the header is the documented way around
    it. All-day (VALUE=DATE) lines don't match and are left alone; idempotent
    on already-converted (carried-forward) events."""
    def repl(m):
        utc = datetime.strptime(m.group(2), "%Y%m%dT%H%M%S").replace(tzinfo=UTC)
        local = utc.astimezone(EASTERN)
        return f"{m.group(1)};TZID=America/New_York:{local.strftime('%Y%m%dT%H%M%S')}"
    return re.sub(r"^(DTSTART|DTEND):(\d{8}T\d{6})Z", repl, event, flags=re.MULTILINE)


def load_previous_sports_ics():
    try:
        with open(OUTPUT_FILE, "r") as f:
            return f.read()
    except FileNotFoundError:
        return ""


def _events_by_uid(ics_text):
    text = ics_text.replace("\r\n ", "").replace("\r\n", "\n")
    out = {}
    for block in re.findall(r"BEGIN:VEVENT.*?END:VEVENT", text, re.S):
        uid = re.search(r"^UID:(.*)$", block, re.M)
        start = re.search(r"^DTSTART([^:\n]*):(\S+)", block, re.M)
        summ = re.search(r"^SUMMARY:(.*)$", block, re.M)
        if uid and start and summ:
            out[uid.group(1).strip()] = ("VALUE=DATE" in start.group(1), summ.group(1).strip())
    return out


def notify_newly_timed(previous_ics, new_ics):
    """ntfy Jeff when a game flips from all-day (TBD) to a real time, since
    Outlook.com may keep showing the old TBD copy for a day or more."""
    old, new = _events_by_uid(previous_ics), _events_by_uid(new_ics)
    changed = [new[u][1] for u, (allday, _) in old.items()
               if allday and u in new and not new[u][0]]
    if not changed:
        return
    names = [re.sub(r" \(time TBD\)", "", c) for c in changed]
    body = "Game time announced:\n" + "\n".join(names[:10]) + "\nIf Outlook still shows TBD, re-subscribe."
    try:
        req = urllib.request.Request(NTFY_URL, data=body.encode("utf-8"),
                                     headers={"Title": "Sports calendar: times set"})
        urllib.request.urlopen(req, timeout=15)
        print(f"ntfy sent for {len(changed)} newly-timed game(s)")
    except Exception as e:
        print(f"WARNING: ntfy failed ({e})", file=sys.stderr)


def main():
    all_events = []
    degraded_labels = []

    # Wisconsin / Michigan State: stable official feeds -- a failure here is
    # treated as a real outage and aborts the whole run (see module docstring).
    for label, category, url in FEEDS:
        try:
            text = fetch(url)
        except Exception as e:
            print(f"ERROR fetching {label}: {e}", file=sys.stderr)
            sys.exit(1)
        events = extract_vevents(text, category)
        if not events:
            print(f"ERROR: {label} returned 0 events, treating as a failure", file=sys.stderr)
            sys.exit(1)
        print(f"{label}: {len(events)} events (category: {category})")
        events = fill_missing_tv(label, events)
        all_events.append((label, events))

    # Purdue: no working official feed as of 2026-08-12, so scraped instead --
    # not a stable API, so a failure here falls back to the last-published
    # events for that specific sport instead of aborting the whole run (see
    # module docstring). Every run first checks whether Purdue's official
    # feed has come back (see try_purdue_official_feed) and prefers it over
    # the scraper if so.
    previous_ics = None
    for label, category, uid_tag, url in PURDUE_PAGES:
        sport_keyword = "football" if uid_tag == "fb" else "basketball"

        events = try_purdue_official_feed(label, category, sport_keyword)
        if events:
            all_events.append((label, events))
            continue

        try:
            events = scrape_purdue_schedule(label, category, uid_tag, url)
            if not events:
                raise ValueError("scrape returned 0 events")
            events, kept = keep_known_times(events, load_previous_sports_ics())
            if kept:
                print(f"{label}: kept previously-published game times for {kept} finished game(s)")
            print(f"{label}: {len(events)} events (category: {category})")
        except Exception as e:
            print(f"WARNING: {label} scrape failed ({e}); keeping last-published events for this sport instead", file=sys.stderr)
            degraded_labels.append(label)
            if previous_ics is None:
                previous_ics = load_previous_sports_ics()
            events = extract_vevents_by_uid_prefix(previous_ics, f"purdue-{uid_tag}-")
            print(f"{label}: carried forward {len(events)} previously-published events")
        all_events.append((label, events))

    header = (
        "BEGIN:VCALENDAR\r\n"
        "VERSION:2.0\r\n"
        "PRODID:-//Jeff Cohen//Combined Sports Calendar//EN\r\n"
        "CALSCALE:GREGORIAN\r\n"
        "METHOD:PUBLISH\r\n"
        f"X-WR-CALNAME:{CALNAME}\r\n"
        "X-WR-TIMEZONE:America/New_York\r\n"
        "X-PUBLISHED-TTL:PT60M\r\n"
        "REFRESH-INTERVAL;VALUE=DURATION:PT1H\r\n"
        + VTIMEZONE_EASTERN
    )
    footer = "END:VCALENDAR\r\n"
    body_parts = []
    for label, events in all_events:
        body_parts.extend(tidy_tv_in_summary(mark_time_tbd(utc_to_eastern_tzid(e))) for e in events)
    body = "\r\n".join(body_parts) + "\r\n"

    # Normalize every line ending to CRLF (events recovered/carried forward
    # from a previous file can arrive with bare LFs, which strict ICS parsers
    # reject), then publish the same content at both URLs.
    full = (header + body + footer).replace("\r\n", "\n").replace("\n", "\r\n")
    notify_newly_timed(load_previous_sports_ics(), full)
    for out_path in (OUTPUT_FILE, MIRROR_FILE, *EXTRA_FILES):
        with open(out_path, "w", newline="") as f:
            f.write(full)

    total = sum(len(events) for _, events in all_events)
    print(f"Wrote {OUTPUT_FILE} with {total} total events")

    if degraded_labels:
        print(f"WARNING: run completed but degraded (stale data used for: {', '.join(degraded_labels)})", file=sys.stderr)
        sys.exit(2)


if __name__ == "__main__":
    main()
