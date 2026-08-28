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
"""
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


def extract_vevents(ics_text):
    """Pull every BEGIN:VEVENT..END:VEVENT block out of a raw .ics feed."""
    events = []
    current = []
    inside = False
    for line in ics_text.splitlines():
        stripped = line.strip()
        if stripped == "BEGIN:VEVENT":
            inside = True
            current = [line]
        elif stripped == "END:VEVENT":
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
