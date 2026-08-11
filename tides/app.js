const CACHE_PREFIX = 'beachTideCache_';
const GRID_CACHE_PREFIX = 'beachTideGrid_';
const CACHE_VERSION = 1;
const CACHE_MAX_AGE_MS = 30 * 60 * 1000;
const UA_HEADERS = { 'User-Agent': 'BeachTideApp/1.0 (personal iphone web app)' };

const LOCATIONS = [
  {
    id: 'brant-beach',
    label: 'Brant Beach, NJ',
    lat: 39.6240, lon: -74.1952,
    tideStationId: '8534048',
    tideStationName: 'Beach Haven Crest',
    tideStationMiles: 1.5,
    waterTempStationId: '8534720',
    waterTempStationName: 'Atlantic City',
    waterTempStationMiles: 20,
  },
  {
    id: 'corolla',
    label: 'Corolla, NC',
    lat: 36.3847, lon: -75.8287,
    tideStationId: '8651370',
    tideStationName: 'Duck Pier',
    tideStationMiles: 14,
    waterTempStationId: '8651370',
    waterTempStationName: 'Duck Pier',
    waterTempStationMiles: 14,
  },
];

// ---------- cache ----------

function cacheKey(locId) { return CACHE_PREFIX + locId; }

function readCache(locId) {
  try {
    const raw = localStorage.getItem(cacheKey(locId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.v !== CACHE_VERSION) return null;
    parsed.tides = parsed.tides.map(e => ({ ...e, time: new Date(e.time) }));
    if (parsed.waterTemp) parsed.waterTemp.time = new Date(parsed.waterTemp.time);
    return parsed;
  } catch (e) {
    return null;
  }
}

function writeCache(locId, data) {
  localStorage.setItem(cacheKey(locId), JSON.stringify({ ...data, v: CACHE_VERSION, savedAt: Date.now() }));
}

function readGridCache(locId) {
  try {
    const raw = localStorage.getItem(GRID_CACHE_PREFIX + locId);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function writeGridCache(locId, hourlyUrl) {
  localStorage.setItem(GRID_CACHE_PREFIX + locId, JSON.stringify({ hourlyUrl }));
}

// ---------- NOAA tide predictions ----------

function pad2(n) { return String(n).padStart(2, '0'); }
function yyyymmdd(d) { return `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`; }

async function fetchTidePredictions(stationId) {
  const begin = new Date();
  begin.setDate(begin.getDate() - 1);
  const url = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&application=BeachTideApp&begin_date=${yyyymmdd(begin)}&range=144&datum=MLLW&station=${stationId}&time_zone=lst_ldt&units=english&interval=hilo&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('tide predictions request failed');
  const data = await res.json();
  if (!data.predictions) throw new Error(data.error ? data.error.message : 'no tide data');
  return data.predictions.map(p => ({
    time: new Date(p.t.replace(' ', 'T')),
    height: parseFloat(p.v),
    type: p.type === 'H' ? 'H' : 'L',
  }));
}

async function fetchWaterTemp(stationId) {
  const url = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=water_temperature&application=BeachTideApp&date=latest&station=${stationId}&time_zone=lst_ldt&units=english&format=json`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.data || !data.data.length) return null;
    const row = data.data[0];
    return { time: new Date(row.t.replace(' ', 'T')), tempF: parseFloat(row.v) };
  } catch (e) {
    return null;
  }
}

// ---------- NWS current conditions (air temp / wind / sky) ----------

async function resolveHourlyUrl(loc) {
  const cached = readGridCache(loc.id);
  if (cached && cached.hourlyUrl) return cached.hourlyUrl;
  const res = await fetch(`https://api.weather.gov/points/${loc.lat},${loc.lon}`, { headers: UA_HEADERS });
  if (!res.ok) throw new Error('NWS points lookup failed');
  const data = await res.json();
  const hourlyUrl = data.properties.forecastHourly;
  writeGridCache(loc.id, hourlyUrl);
  return hourlyUrl;
}

async function fetchCurrentConditions(loc) {
  try {
    const hourlyUrl = await resolveHourlyUrl(loc);
    const res = await fetch(hourlyUrl, { headers: UA_HEADERS });
    if (!res.ok) return null;
    const data = await res.json();
    const p = data.properties.periods[0];
    return {
      tempF: p.temperature,
      windSpeed: p.windSpeed,
      windDirection: p.windDirection,
      shortForecast: p.shortForecast,
      isDaytime: p.isDaytime,
    };
  } catch (e) {
    return null;
  }
}

const SKY_ICONS = [
  { test: /thunder/i, icon: '⛈️' },
  { test: /snow|flurr|blizzard/i, icon: '❄️' },
  { test: /rain|shower|drizzle/i, icon: '🌧️' },
  { test: /fog|haze|mist/i, icon: '🌫️' },
  { test: /wind/i, icon: '💨' },
  { test: /clear|sunny/i, icon: '☀️' },
  { test: /partly cloudy|partly sunny|mostly clear/i, icon: '🌤️' },
  { test: /mostly cloudy|cloudy/i, icon: '☁️' },
];
function skyIcon(shortForecast, isDaytime) {
  for (const e of SKY_ICONS) if (e.test.test(shortForecast || '')) return e.icon;
  return isDaytime ? '🌡️' : '🌙';
}

// ---------- sun & moon (client-side astronomy, no API) ----------

const RAD = Math.PI / 180;
const DAY_MS = 86400000;
const J1970 = 2440588, J2000 = 2451545;

function toJulian(date) { return date.valueOf() / DAY_MS - 0.5 + J1970; }
function fromJulian(j) { return new Date((j + 0.5 - J1970) * DAY_MS); }
function toDays(date) { return toJulian(date) - J2000; }

function sunTimes(date, lat, lon) {
  const e = RAD * 23.4397;
  const lw = RAD * -lon, phi = RAD * lat;
  const d = toDays(date);

  const M = RAD * (357.5291 + 0.98560028 * d);
  const C = RAD * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  const P = RAD * 102.9372;
  const L = M + C + P + Math.PI;
  const dec = Math.asin(Math.sin(L) * Math.sin(e));

  const n = Math.round(d - 0.0009 - lw / (2 * Math.PI));
  const ds = 0.0009 + lw / (2 * Math.PI) + n;
  const Jnoon = J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);

  const h0 = -0.833 * RAD;
  const cosH = (Math.sin(h0) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec));
  if (cosH > 1 || cosH < -1) return { sunrise: null, sunset: null }; // polar day/night, N/A here
  const w0 = Math.acos(cosH);
  const a = 0.0009 + (w0 + lw) / (2 * Math.PI) + n;
  const Jset = J2000 + a + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
  const Jrise = Jnoon - (Jset - Jnoon);

  return { sunrise: fromJulian(Jrise), sunset: fromJulian(Jset) };
}

const MOON_EPOCH_NEW = Date.UTC(2000, 0, 6, 18, 14); // known new moon
const SYNODIC_MONTH = 29.530588853;

function moonPhase(date) {
  const days = (date.getTime() - MOON_EPOCH_NEW) / DAY_MS;
  const frac = ((days % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH / SYNODIC_MONTH;
  const illumination = Math.round((1 - Math.cos(2 * Math.PI * frac)) / 2 * 100);
  let name, icon;
  if (frac < 0.033 || frac >= 0.967) { name = 'New Moon'; icon = '🌑'; }
  else if (frac < 0.216) { name = 'Waxing Crescent'; icon = '🌒'; }
  else if (frac < 0.284) { name = 'First Quarter'; icon = '🌓'; }
  else if (frac < 0.467) { name = 'Waxing Gibbous'; icon = '🌔'; }
  else if (frac < 0.533) { name = 'Full Moon'; icon = '🌕'; }
  else if (frac < 0.716) { name = 'Waning Gibbous'; icon = '🌖'; }
  else if (frac < 0.784) { name = 'Last Quarter'; icon = '🌗'; }
  else { name = 'Waning Crescent'; icon = '🌘'; }
  return { name, icon, illumination };
}

// ---------- tide curve interpolation ----------

// Approximates the smooth curve between NOAA's discrete high/low points with a
// cosine "bell" interpolation -- the standard simplified model for a tide curve
// when only hi/lo predictions are available (true for subordinate stations like
// Beach Haven Crest, which don't publish a continuous 6-minute curve).
function heightAt(events, t) {
  for (let i = 0; i < events.length - 1; i++) {
    const a = events[i], b = events[i + 1];
    if (t >= a.time && t <= b.time) {
      const frac = (t - a.time) / (b.time - a.time);
      return a.height + (b.height - a.height) * (1 - Math.cos(Math.PI * frac)) / 2;
    }
  }
  return null;
}

function currentStatus(events, now) {
  for (let i = 0; i < events.length - 1; i++) {
    const a = events[i], b = events[i + 1];
    if (now >= a.time && now <= b.time) {
      const height = heightAt(events, now);
      const rising = b.height > a.height;
      const msToNext = b.time - now;
      return { height, rising, next: b, msToNext };
    }
  }
  return null;
}

// ---------- formatting ----------

function fmtTime(d) {
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
function fmtDay(d, today) {
  const days = Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - today) / DAY_MS);
  if (days === 0) return 'Today';
  if (days === 1) return 'Tomorrow';
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
function fmtDuration(ms) {
  const totalMin = Math.round(ms / 60000);
  const h = Math.floor(totalMin / 60), m = totalMin % 60;
  if (h <= 0) return `${m}m`;
  return `${h}h ${m}m`;
}
function fmtHeight(ft) { return `${ft.toFixed(1)} ft`; }

// ---------- data loading ----------

async function loadLocationData(loc, { force } = {}) {
  if (!force) {
    const cached = readCache(loc.id);
    if (cached && Date.now() - cached.savedAt < CACHE_MAX_AGE_MS) return cached;
  }
  const [tides, waterTemp, conditions] = await Promise.all([
    fetchTidePredictions(loc.tideStationId),
    fetchWaterTemp(loc.waterTempStationId),
    fetchCurrentConditions(loc),
  ]);
  const data = { tides, waterTemp, conditions, savedAt: Date.now() };
  writeCache(loc.id, data);
  return data;
}

// ---------- SVG tide chart ----------

function buildChartSvg(events, now) {
  const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const windowStart = new Date(dayStart.getTime() - 6 * 3600000);
  const windowEnd = new Date(windowStart.getTime() + 48 * 3600000);

  const W = 900, H = 200, PAD_TOP = 16, PAD_BOTTOM = 24, PAD_LEFT = 8, PAD_RIGHT = 8;
  const plotW = W - PAD_LEFT - PAD_RIGHT;
  const plotH = H - PAD_TOP - PAD_BOTTOM;
  const hours = 48;

  const inWindow = events.filter(e => e.time >= windowStart && e.time <= windowEnd);
  const heights = [];
  for (let m = 0; m <= hours * 60; m += 10) {
    const t = new Date(windowStart.getTime() + m * 60000);
    const h = heightAt(events, t);
    if (h !== null) heights.push({ t, h });
  }
  if (!heights.length) return '';

  let minH = Math.min(...heights.map(p => p.h), ...inWindow.map(e => e.height));
  let maxH = Math.max(...heights.map(p => p.h), ...inWindow.map(e => e.height));
  const pad = Math.max(0.3, (maxH - minH) * 0.15);
  minH -= pad; maxH += pad;

  const x = t => PAD_LEFT + ((t - windowStart) / (hours * 3600000)) * plotW;
  const y = h => PAD_TOP + plotH - ((h - minH) / (maxH - minH)) * plotH;

  let path = '';
  heights.forEach((p, i) => {
    path += (i === 0 ? 'M' : 'L') + x(p.t).toFixed(1) + ',' + y(p.h).toFixed(1) + ' ';
  });
  const areaPath = path + `L${x(heights[heights.length - 1].t).toFixed(1)},${(PAD_TOP + plotH).toFixed(1)} L${x(heights[0].t).toFixed(1)},${(PAD_TOP + plotH).toFixed(1)} Z`;

  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<path d="${areaPath}" fill="rgba(95,184,255,0.18)" stroke="none"/>`;
  svg += `<path d="${path.trim()}" fill="none" stroke="#2f7fd6" stroke-width="2.5"/>`;

  // day-boundary gridlines + hour labels
  for (let hh = 0; hh <= hours; hh += 6) {
    const t = new Date(windowStart.getTime() + hh * 3600000);
    const xx = x(t).toFixed(1);
    const isMidnight = t.getHours() === 0;
    svg += `<line x1="${xx}" y1="${PAD_TOP}" x2="${xx}" y2="${PAD_TOP + plotH}" stroke="${isMidnight ? '#bbb' : '#e8e8e8'}" stroke-width="${isMidnight ? 1.2 : 1}"/>`;
    const label = isMidnight
      ? t.toLocaleDateString('en-US', { weekday: 'short' })
      : t.toLocaleTimeString('en-US', { hour: 'numeric' });
    svg += `<text x="${xx}" y="${H - 6}" font-size="10" fill="#777" text-anchor="middle">${label}</text>`;
  }

  // high/low markers
  inWindow.forEach(e => {
    const xx = x(e.time), yy = y(e.height);
    svg += `<circle cx="${xx.toFixed(1)}" cy="${yy.toFixed(1)}" r="3.5" fill="#0b1d3a"/>`;
    const above = e.type === 'H';
    const ty = above ? yy - 8 : yy + 16;
    svg += `<text x="${xx.toFixed(1)}" y="${ty.toFixed(1)}" font-size="10.5" fill="#0b1d3a" text-anchor="middle" font-weight="600">${e.height.toFixed(1)}</text>`;
    svg += `<text x="${xx.toFixed(1)}" y="${(ty + (above ? -10 : 12)).toFixed(1)}" font-size="9" fill="#888" text-anchor="middle">${fmtTime(e.time)}</text>`;
  });

  // now marker
  if (now >= windowStart && now <= windowEnd) {
    const xx = x(now).toFixed(1);
    svg += `<line x1="${xx}" y1="${PAD_TOP}" x2="${xx}" y2="${PAD_TOP + plotH}" stroke="#ff6b6b" stroke-width="1.5" stroke-dasharray="3,3"/>`;
    svg += `<circle cx="${xx}" cy="${y(heightAt(events, now)).toFixed(1)}" r="4" fill="#ff6b6b"/>`;
  }

  svg += '</svg>';
  return svg;
}

// ---------- rendering ----------

let activeLocId = LOCATIONS[0].id;

function renderTabs() {
  const tabsEl = document.getElementById('tabs');
  tabsEl.innerHTML = '';
  LOCATIONS.forEach(loc => {
    const btn = document.createElement('button');
    btn.className = 'tab' + (loc.id === activeLocId ? ' active' : '');
    btn.textContent = loc.label;
    btn.addEventListener('click', () => {
      activeLocId = loc.id;
      renderTabs();
      document.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + loc.id));
    });
    tabsEl.appendChild(btn);
  });
}

function renderPanelShell() {
  const panelsEl = document.getElementById('panels');
  panelsEl.innerHTML = '';
  LOCATIONS.forEach(loc => {
    const panel = document.createElement('div');
    panel.className = 'panel' + (loc.id === activeLocId ? ' active' : '');
    panel.id = 'panel-' + loc.id;
    panel.innerHTML = `
      <div class="panel-header"><h1>${loc.label}</h1></div>
      <div class="updated-row">
        <span id="updated-${loc.id}"></span>
        <button class="refresh-btn" data-loc="${loc.id}">Refresh</button>
      </div>
      <div id="body-${loc.id}"><div class="status">Loading tide data…</div></div>
    `;
    panelsEl.appendChild(panel);
  });
  document.querySelectorAll('.refresh-btn').forEach(btn => {
    btn.addEventListener('click', () => renderLocation(LOCATIONS.find(l => l.id === btn.dataset.loc), { force: true }));
  });
}

function renderLocationBody(loc, data) {
  const now = new Date();
  const bodyEl = document.getElementById('body-' + loc.id);
  const status = currentStatus(data.tides, now);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let statusHtml = '';
  if (status) {
    const arrow = status.rising ? '⬆️' : '⬇️';
    const verb = status.rising ? 'Rising' : 'Falling';
    const nextLabel = status.next.type === 'H' ? 'high tide' : 'low tide';
    statusHtml = `
      <div class="tide-status">
        <div class="ts-height">${fmtHeight(status.height)}</div>
        <div class="ts-detail">${arrow} ${verb} — ${nextLabel} of ${fmtHeight(status.next.height)}
          at ${fmtTime(status.next.time)} (in ${fmtDuration(status.msToNext)})</div>
      </div>`;
  }

  const chartSvg = buildChartSvg(data.tides, now);

  let conditionsHtml = '<div class="cond-row">';
  if (data.waterTemp) conditionsHtml += `<div class="cond"><div class="cond-label">Water</div><div class="cond-val">${Math.round(data.waterTemp.tempF)}°</div></div>`;
  if (data.conditions) {
    conditionsHtml += `<div class="cond"><div class="cond-label">Air</div><div class="cond-val">${skyIcon(data.conditions.shortForecast, data.conditions.isDaytime)} ${data.conditions.tempF}°</div></div>`;
    conditionsHtml += `<div class="cond"><div class="cond-label">Wind</div><div class="cond-val">${data.conditions.windSpeed} ${data.conditions.windDirection}</div></div>`;
  }
  conditionsHtml += '</div>';

  const sun = sunTimes(now, loc.lat, loc.lon);
  const moon = moonPhase(now);
  const sunMoonHtml = `
    <div class="cond-row">
      <div class="cond"><div class="cond-label">Sunrise</div><div class="cond-val">🌅 ${sun.sunrise ? fmtTime(sun.sunrise) : '–'}</div></div>
      <div class="cond"><div class="cond-label">Sunset</div><div class="cond-val">🌇 ${sun.sunset ? fmtTime(sun.sunset) : '–'}</div></div>
      <div class="cond"><div class="cond-label">Moon</div><div class="cond-val">${moon.icon} ${moon.illumination}%</div></div>
    </div>`;

  const upcoming = data.tides.filter(e => e.time >= now).slice(0, 10);
  let lastDayLabel = null;
  let listHtml = '<div class="detailed-list">';
  upcoming.forEach(e => {
    const dayLabel = fmtDay(e.time, today);
    if (dayLabel !== lastDayLabel) {
      listHtml += `<div class="day-heading">${dayLabel}</div>`;
      lastDayLabel = dayLabel;
    }
    const kind = e.type === 'H' ? 'High' : 'Low';
    listHtml += `<div class="detail-item"><b>${kind} tide</b> — ${fmtHeight(e.height)} at ${fmtTime(e.time)}</div>`;
  });
  listHtml += '</div>';

  bodyEl.innerHTML = `
    ${statusHtml}
    <div class="chart-section">
      <h2>Tide height (48 hrs)</h2>
      <div class="hourly-chart">${chartSvg}</div>
    </div>
    ${conditionsHtml}
    ${sunMoonHtml}
    <div class="chart-section"><h2>Upcoming tides</h2>${listHtml}</div>
    <div class="source-row">
      Tide predictions: <b>${loc.tideStationName}</b> NOAA station (~${loc.tideStationMiles} mi away).
      Water temp: <b>${loc.waterTempStationName}</b> NOAA station (~${loc.waterTempStationMiles} mi away).
      Air/wind: National Weather Service. Curve between predicted highs/lows is an approximation.
    </div>
  `;
}

async function renderLocation(loc, opts) {
  const updatedEl = document.getElementById('updated-' + loc.id);
  const bodyEl = document.getElementById('body-' + loc.id);
  if (opts && opts.force) bodyEl.innerHTML = '<div class="status">Refreshing…</div>';
  try {
    const data = await loadLocationData(loc, opts);
    renderLocationBody(loc, data);
    const savedAt = data.savedAt ? new Date(data.savedAt) : new Date();
    updatedEl.textContent = 'Updated ' + savedAt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  } catch (e) {
    bodyEl.innerHTML = `<div class="status error">Couldn't load tide data. ${e.message || ''}</div>`;
  }
}

function init() {
  renderTabs();
  renderPanelShell();
  LOCATIONS.forEach(loc => renderLocation(loc));
}

document.addEventListener('DOMContentLoaded', init);
