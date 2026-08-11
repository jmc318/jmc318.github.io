"""Fetches each school's official calendar feed and merges them into one
combined sports.ics file, tagging every event with a CATEGORIES value equal to
the school name (e.g. "Wisconsin"). Outlook/iCal import CATEGORIES from a
subscribed .ics as a Category on each event; assigning a color to that
category name locally (one-time, per user) then color-codes every game from
that school. Add more (label, school, url) tuples to FEEDS as Purdue/Michigan
State feeds become available -- their events will pick up the "Purdue" /
"Michigan State" category automatically once added here.

If any feed fails to fetch, the script exits without writing sports.ics, so a
temporary outage never overwrites the last known-good combined file.
"""
import sys
import urllib.request

# (display label, category/school name written into each event, feed URL)
FEEDS = [
    ("Wisconsin Football", "Wisconsin", "https://uwbadgers.com/api/v2/Calendar/subscribe?type=ics&sportId=1&scheduleId=694"),
    ("Wisconsin Men's Basketball", "Wisconsin", "https://uwbadgers.com/api/v2/Calendar/subscribe?type=ics&sportId=3&scheduleId=765"),
    ("Michigan State Football", "Michigan State", "https://msuspartans.com/api/v2/Calendar/subscribe?type=ics&sportId=4"),
    ("Michigan State Men's Basketball", "Michigan State", "https://msuspartans.com/api/v2/Calendar/subscribe?type=ics&sportId=6"),
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
}

CALNAME = "Wisconsin, Purdue & Michigan State Football/Basketball"


def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8")


def extract_vevents(ics_text, category):
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


def main():
    all_events = []
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

    with open("sports.ics", "w", newline="") as f:
        f.write(header + body + footer)

    total = sum(len(events) for _, events in all_events)
    print(f"Wrote sports.ics with {total} total events")


if __name__ == "__main__":
    main()
