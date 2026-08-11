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

function tideBoxHtml(e) {
  const kind = e.type === 'H' ? 'High' : 'Low';
  return `<div class="cond"><div class="cond-label">${kind}</div><div class="cond-val">${fmtHeight(e.height)}</div><div class="cond-sub">${fmtTime(e.time)}</div></div>`;
}

function renderLocationBody(loc, data) {
  const now = new Date();
  const bodyEl = document.getElementById('body-' + loc.id);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // group every day's tides (today onward, today keeps its already-passed events too)
  const relevant = data.tides.filter(e => new Date(e.time.getFullYear(), e.time.getMonth(), e.time.getDate()) >= today);
  const dayGroups = [];
  relevant.forEach(e => {
    const label = fmtDay(e.time, today);
    let group = dayGroups.find(g => g.label === label);
    if (!group) { group = { label, events: [] }; dayGroups.push(group); }
    group.events.push(e);
  });

  const tidesHtml = `
    <div class="chart-section">
      <h2>Tides</h2>
      ${dayGroups.slice(0, 5).map(g => `
        <div class="day-heading">${g.label}</div>
        <div class="cond-row tide-row">${g.events.map(tideBoxHtml).join('')}</div>
      `).join('')}
    </div>`;

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

  bodyEl.innerHTML = `
    ${tidesHtml}
    ${conditionsHtml}
    ${sunMoonHtml}
    <div class="source-row">
      Tide predictions: <b>${loc.tideStationName}</b> NOAA station (~${loc.tideStationMiles} mi away).
      Water temp: <b>${loc.waterTempStationName}</b> NOAA station (~${loc.waterTempStationMiles} mi away).
      Air/wind: National Weather Service.
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
