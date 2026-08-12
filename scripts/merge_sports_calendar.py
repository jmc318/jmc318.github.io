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
own schedule pages instead (PURDUE_PAGES below). Because that scrape depends
on Purdue's page layout rather than a stable API contract, a Purdue failure
is NOT treated the same as a Wisconsin/Michigan State feed failure: it does
NOT abort the run. Instead it falls back to whatever Purdue events were
already in the last-published sports.ics, so Wisconsin/Michigan State keep
updating normally and Purdue just goes stale (rather than disappearing)
until the scraper is fixed.
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

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
}

CALNAME = "Wisconsin, Purdue & Michigan State Football/Basketball"
OUTPUT_FILE = "sports.ics"
EASTERN = ZoneInfo("America/New_York")
UTC = ZoneInfo("UTC")


def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read()
        if resp.info().get("Content-Encoding") == "gzip":
            raw = gzip.decompress(raw)
        return raw.decode("utf-8")


def extract_vevents(ics_text, category):
    """Pull every BEGIN:VEVENT..END:VEVENT block out of a raw .ics feed and
    tag it with CATEGORIES:<category>."""
    events = []
    current = []
    inside = False
    for line in ics_text.splitlines():
        stripped = line.strip()
        if stripped == "BEGIN:VEVENT":
            inside = True
            current = [line]
        elif stripped == "END:VEVENT":
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
            month_day = datetime.strptime(month_day_text, "%b %d")
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


def load_previous_sports_ics():
    try:
        with open(OUTPUT_FILE, "r") as f:
            return f.read()
    except FileNotFoundError:
        return ""


def main():
    all_events = []

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
        all_events.append((label, events))

    # Purdue: scraped, not a stable API -- a failure here falls back to the
    # last-published events for that specific sport instead of aborting the
    # whole run (see module docstring).
    previous_ics = None
    for label, category, uid_tag, url in PURDUE_PAGES:
        try:
            events = scrape_purdue_schedule(label, category, uid_tag, url)
            if not events:
                raise ValueError("scrape returned 0 events")
            print(f"{label}: {len(events)} events (category: {category})")
        except Exception as e:
            print(f"WARNING: {label} scrape failed ({e}); keeping last-published events for this sport instead", file=sys.stderr)
            if previous_ics is None:
                previous_ics = load_previous_sports_ics()
            events = extract_vevents_by_uid_prefix(previous_ics, f"purdue-{uid_tag}-")
            print(f"{label}: carried forward {len(events)} previously-published events")
        all_events.append((label, events))

    header = (
        "BEGIN:VCALENDAR\r\n"
        "VERSION:2.0\r\n"
        "PRODID:-//Jeff Cohen//Combined Sports Calendar//EN\r\n"
        f"X-WR-CALNAME:{CALNAME}\r\n"
        "X-PUBLISHED-TTL:PT120M\r\n"
    )
    footer = "END:VCALENDAR\r\n"
    body_parts = []
    for label, events in all_events:
        body_parts.extend(events)
    body = "\r\n".join(body_parts) + "\r\n"

    with open(OUTPUT_FILE, "w", newline="") as f:
        f.write(header + body + footer)

    total = sum(len(events) for _, events in all_events)
    print(f"Wrote {OUTPUT_FILE} with {total} total events")


if __name__ == "__main__":
    main()
