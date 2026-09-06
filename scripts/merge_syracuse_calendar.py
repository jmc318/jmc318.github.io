"""Fetches Syracuse's official calendar feeds (Football, Men's Basketball,
Women's Basketball) and writes them into a standalone syracuse.ics -- a
separate calendar from sports.ics (Wisconsin/Purdue/Michigan State), meant to
be subscribed to on its own.

All three Syracuse feeds come from cuse.com's classic SIDEARM calendar-
subscribe API (same API Wisconsin and Michigan State use), confirmed working
directly even though cuse.com's own site has migrated to a newer front end --
see Sports Calendar/CLAUDE.md. If any feed fails to fetch or returns 0 events,
the whole run aborts without writing syracuse.ics, so a temporary outage never
overwrites the last known-good file with an empty/partial one (same safety
behavior as the Wisconsin/Michigan State feeds in merge_sports_calendar.py).

TV network (added 2026-09-06): when a game's broadcast network is known, it's
appended to the event title as "(TV: ACCN)" etc., so it's visible on the
calendar itself rather than only in the event description. Same approach as
merge_sports_calendar.py's Wisconsin/Michigan State handling -- this feed
format already carries a "TV: ..." field in DESCRIPTION, just wasn't
previously surfaced in the title. Omitted entirely for games where a network
hasn't been assigned yet.
"""
import re
import sys
import urllib.request
import gzip

# (display label, feed URL) -- sportId found by probing cuse.com/api/v2/Calendar/subscribe
# and reading each feed's X-WR-CALNAME: 8=Football, 6=Men's Basketball, 7=Women's Basketball.
FEEDS = [
    ("Syracuse Football", "https://cuse.com/api/v2/Calendar/subscribe?type=ics&sportId=8"),
    ("Syracuse Men's Basketball", "https://cuse.com/api/v2/Calendar/subscribe?type=ics&sportId=6"),
    ("Syracuse Women's Basketball", "https://cuse.com/api/v2/Calendar/subscribe?type=ics&sportId=7"),
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
}

CALNAME = "Syracuse Football, Men's & Women's Basketball"
OUTPUT_FILE = "syracuse.ics"


def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        raw = resp.read()
        if resp.info().get("Content-Encoding") == "gzip":
            raw = gzip.decompress(raw)
        return raw.decode("utf-8")


def extract_tv_network(description_line):
    """cuse.com's SIDEARM feed DESCRIPTION field packs several labeled fields
    onto one line separated by literal '\\n' (backslash-n text, not real
    newlines -- SIDEARM's own escaping), e.g. '...\\nTV: ACCN\\nRadio: ...'.
    Pulls out the network name after 'TV: ' if that field is present (it's
    omitted entirely on games where a network hasn't been assigned yet)."""
    m = re.search(r"\\nTV:\s*([^\\]+?)(?:\\n|$)", description_line)
    return m.group(1).strip() if m else None


def inject_tv_network_into_summary(lines):
    """Given a VEVENT's raw lines, append the TV network (read off the
    DESCRIPTION field) onto the SUMMARY line, so it shows up in the
    calendar's event title/listing itself instead of being buried in the
    description that only shows once an event is opened."""
    network = None
    for line in lines:
        if line.startswith("DESCRIPTION:"):
            network = extract_tv_network(line)
            break
    if not network:
        return lines
    return [
        f"{line} (TV: {network})" if line.startswith("SUMMARY:") else line
        for line in lines
    ]


def extract_vevents(ics_text):
    """Pull every BEGIN:VEVENT..END:VEVENT block out of a raw .ics feed and
    append the TV network (if known) onto the title."""
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
            current.append(line)
            events.append("\r\n".join(current))
            inside = False
        elif inside:
            current.append(line)
    return events


def main():
    all_events = []

    for label, url in FEEDS:
        try:
            text = fetch(url)
        except Exception as e:
            print(f"ERROR fetching {label}: {e}", file=sys.stderr)
            sys.exit(1)
        events = extract_vevents(text)
        if not events:
            print(f"ERROR: {label} returned 0 events, treating as a failure", file=sys.stderr)
            sys.exit(1)
        print(f"{label}: {len(events)} events")
        all_events.append((label, events))

    header = (
        "BEGIN:VCALENDAR\r\n"
        "VERSION:2.0\r\n"
        "PRODID:-//Jeff Cohen//Syracuse Sports Calendar//EN\r\n"
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
