const STORAGE_KEY = 'beachWeatherLocations';
const CACHE_PREFIX = 'beachWeatherCache_';
const CACHE_VERSION = 15;
const CACHE_MAX_AGE_MS = 30 * 60 * 1000;
const STEP_HOURS = 3;
const TIMELINE_STEPS = 56; // 7 days at 3-hour resolution

const DEFAULT_LOCATIONS = [
  { id: 'loc-1', label: 'Westfield, NJ', lat: 40.64, lon: -74.35 },
  { id: 'loc-2', label: 'Beach Haven, NJ', lat: 39.5597, lon: -74.2444 },
  { id: 'loc-3', label: 'Corolla, NC', lat: 36.3813, lon: -75.833 },
];

const ICONS = [
  { test: /thunder/i, icon: '⛈️' },
  { test: /snow|flurr|blizzard/i, icon: '❄️' },
  { test: /rain|shower|drizzle/i, icon: '🌧️' },
  { test: /fog|haze|mist/i, icon: '🌫️' },
  { test: /wind/i, icon: '💨' },
  { test: /clear|sunny/i, icon: '☀️' },
  { test: /partly cloudy|partly sunny|mostly clear/i, icon: '🌤️' },
  { test: /mostly cloudy|cloudy/i, icon: '☁️' },
];

function iconFor(shortForecast, isDaytime) {
  for (const entry of ICONS) {
    if (entry.test.test(shortForecast)) return entry.icon;
  }
  return isDaytime ? '🌡️' : '🌙';
}

function loadLocations() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) {}
  return DEFAULT_LOCATIONS.slice();
}

function saveLocations(locations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
}

function cacheKey(lat, lon) {
  return CACHE_PREFIX + lat.toFixed(4) + '_' + lon.toFixed(4);
}

function readCache(lat, lon) {
  try {
    const raw = localStorage.getItem(cacheKey(lat, lon));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.v !== CACHE_VERSION || !Array.isArray(parsed.timeline)) return null;
    return parsed;
  } catch (e) {
    return null;
  }
}

function writeCache(lat, lon, data) {
  localStorage.setItem(cacheKey(lat, lon), JSON.stringify({ ...data, v: CACHE_VERSION, savedAt: Date.now() }));
}

function parseLatLonFromInput(text) {
  const urlMatch = text.match(/lat=(-?\d+\.?\d*)&lon=(-?\d+\.?\d*)/i);
  if (urlMatch) return { lat: parseFloat(urlMatch[1]), lon: parseFloat(urlMatch[2]) };
  const pairMatch = text.match(/(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)/);
  if (pairMatch) return { lat: parseFloat(pairMatch[1]), lon: parseFloat(pairMatch[2]) };
  return null;
}

async function geocodePlace(query) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&q=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const results = await res.json();
  if (!results.length) return null;
  return { lat: parseFloat(results[0].lat), lon: parseFloat(results[0].lon) };
}

// ---------- NOAA gridpoint parsing ----------

function parseISODurationHours(dur) {
  const m = dur.match(/^P(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?$/);
  if (!m) return 1;
  const days = parseInt(m[1] || 0, 10);
  const hours = parseInt(m[2] || 0, 10);
  const mins = parseInt(m[3] || 0, 10);
  return days * 24 + hours + mins / 60;
}

function parseSeries(values) {
  if (!Array.isArray(values)) return [];
  return values.map(v => {
    const [startStr, durStr] = v.validTime.split('/');
    const start = new Date(startStr);
    const end = new Date(start.getTime() + parseISODurationHours(durStr) * 3600000);
    return { start, end, value: v.value };
  });
}

function sampleAt(intervals, t) {
  for (const iv of intervals) {
    if (t >= iv.start && t < iv.end) return iv.value;
  }
  return null;
}

function findInterval(intervals, t) {
  for (const iv of intervals) {
    if (t >= iv.start && t < iv.end) return iv;
  }
  return null;
}

// Sums expected rain amount across a time range (e.g. a forecast period like
// "Today" or "Tonight") by overlap-weighting NOAA's raw rain-amount blocks,
// since those blocks (often 6 hours) don't line up neatly with period edges.
function sumQpfInches(qpfIntervals, rangeStart, rangeEnd) {
  let totalMm = 0;
  qpfIntervals.forEach(iv => {
    if (iv.value === null || iv.value === undefined) return;
    const overlapStart = iv.start > rangeStart ? iv.start : rangeStart;
    const overlapEnd = iv.end < rangeEnd ? iv.end : rangeEnd;
    const overlapHours = (overlapEnd - overlapStart) / 3600000;
    if (overlapHours <= 0) return;
    const intervalHours = (iv.end - iv.start) / 3600000;
    if (intervalHours <= 0) return;
    totalMm += iv.value * (overlapHours / intervalHours);
  });
  return Math.round((totalMm / 25.4) * 100) / 100;
}

function degToCompass(deg) {
  if (deg === null || deg === undefined) return '';
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

const COVERAGE_PCT = {
  isolated: 10, slight_chance: 20, chance: 40, scattered: 30, patchy: 20,
  areas: 30, few: 20, brief: 20, intermittent: 40, periods: 50, occasional: 50,
  likely: 60, numerous: 70, frequent: 80, widespread: 90, definite: 100,
};

// NOAA gives thunderstorm likelihood as a wording ("chance", "likely", etc.)
// rather than a number, so this maps that wording to an approximate percent.
function getThunderPct(weatherValue) {
  if (!Array.isArray(weatherValue)) return null;
  let best = null;
  weatherValue.forEach(w => {
    if (w && w.weather && /thunderstorm/i.test(w.weather)) {
      const pct = COVERAGE_PCT[w.coverage] || 30;
      if (best === null || pct > best) best = pct;
    }
  });
  return best;
}

function buildTimeline(gridProps) {
  const temp = parseSeries(gridProps.temperature && gridProps.temperature.values);
  const heatIndex = parseSeries(gridProps.heatIndex && gridProps.heatIndex.values);
  const humidity = parseSeries(gridProps.relativeHumidity && gridProps.relativeHumidity.values);
  const sky = parseSeries(gridProps.skyCover && gridProps.skyCover.values);
  const windSpeed = parseSeries(gridProps.windSpeed && gridProps.windSpeed.values);
  const windDir = parseSeries(gridProps.windDirection && gridProps.windDirection.values);
  const pop = parseSeries(gridProps.probabilityOfPrecipitation && gridProps.probabilityOfPrecipitation.values);
  const qpf = parseSeries(gridProps.quantitativePrecipitation && gridProps.quantitativePrecipitation.values);
  const weather = parseSeries(gridProps.weather && gridProps.weather.values);

  const now = new Date();
  const startHour = now.getHours() - (now.getHours() % STEP_HOURS);
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHour, 0, 0, 0);

  const timeline = [];
  let lastQpfInterval = null;
  for (let i = 0; i < TIMELINE_STEPS; i++) {
    const t = new Date(start.getTime() + i * STEP_HOURS * 3600000);
    const c = sampleAt(temp, t);
    const hi = sampleAt(heatIndex, t);
    // NOAA reports rain amount as one running total for a whole block of time
    // (often 6 hours), the same way its own graphical forecast draws it: one
    // number, shown once, spanning however many hours the block covers — not
    // repeated at full value under every column the block touches. So only
    // surface the amount in the first column where a given block appears;
    // later columns still inside that same block stay blank.
    const qpfIv = findInterval(qpf, t);
    let qpfInches = 0;
    if (qpfIv && qpfIv !== lastQpfInterval && qpfIv.value !== null) {
      qpfInches = Math.round((qpfIv.value / 25.4) * 100) / 100;
    }
    if (qpfIv) lastQpfInterval = qpfIv;
    timeline.push({
      t: t.toISOString(),
      temp: c === null ? null : Math.round(c * 9 / 5 + 32),
      heatIndex: hi === null ? null : Math.round(hi * 9 / 5 + 32),
      humidity: sampleAt(humidity, t),
      sky: sampleAt(sky, t),
      windMph: (() => { const v = sampleAt(windSpeed, t); return v === null ? null : Math.round(v * 0.621371); })(),
      windDir: degToCompass(sampleAt(windDir, t)),
      pop: sampleAt(pop, t),
      qpfIn: qpfInches,
      // identifies which NOAA rain block this column belongs to (its start
      // time), null when there's no rain data, so the chart can group
      // contiguous columns from the same block into one shaded span.
      qpfKey: qpfIv && qpfIv.value !== null ? qpfIv.start.toISOString() : null,
      thunderPct: getThunderPct(sampleAt(weather, t)),
    });
  }
  return timeline;
}

// ---------- fetching ----------

async function resolveAndFetchForecast(lat, lon) {
  const pointsRes = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  if (!pointsRes.ok) throw new Error('Could not find that location with NOAA.');
  const pointsData = await pointsRes.json();
  const forecastUrl = pointsData.properties.forecast;
  const gridUrl = pointsData.properties.forecastGridData;
  const stationsUrl = pointsData.properties.observationStations;
  const rel = pointsData.properties.relativeLocation && pointsData.properties.relativeLocation.properties;
  const suggestedLabel = rel ? `${rel.city}, ${rel.state}` : null;
  const gridId = pointsData.properties.gridId;
  const gridX = pointsData.properties.gridX;
  const gridY = pointsData.properties.gridY;

  const [forecastRes, gridRes, stationsRes] = await Promise.all([fetch(forecastUrl), fetch(gridUrl), fetch(stationsUrl)]);
  if (!forecastRes.ok) throw new Error('NOAA did not return a forecast for that spot.');
  if (!gridRes.ok) throw new Error('NOAA did not return hourly data for that spot.');
  const forecastData = await forecastRes.json();
  const gridData = await gridRes.json();

  let station = null;
  if (stationsRes.ok) {
    const stationsData = await stationsRes.json();
    const first = stationsData.features && stationsData.features[0];
    if (first) station = { id: first.properties.stationIdentifier, name: first.properties.name };
  }

  const qpfSeries = parseSeries(gridData.properties.quantitativePrecipitation && gridData.properties.quantitativePrecipitation.values);
  const periods = forecastData.properties.periods.map(p => ({
    ...p,
    rainIn: sumQpfInches(qpfSeries, new Date(p.startTime), new Date(p.endTime)),
  }));

  return {
    periods,
    updated: forecastData.properties.updateTime,
    timeline: buildTimeline(gridData.properties),
    suggestedLabel,
    gridId, gridX, gridY,
    station,
  };
}

// ---------- rendering ----------

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatHourLabel(d) {
  let h = d.getHours();
  const ampm = h < 12 ? 'a' : 'p';
  h = h % 12; if (h === 0) h = 12;
  return h + ampm;
}

function formatDayLabel(d) {
  return d.toLocaleDateString('en-US', { weekday: 'short' }) + ' ' + (d.getMonth() + 1) + '/' + d.getDate();
}

const ROW = { axisTop: 30, temp: 100, humidity: 62, sky: 62, wind: 78, rain: 78, thunder: 34, axisBottom: 24 };
const COL_W = 46;

function bandY(rowKey) {
  const order = ['axisTop', 'temp', 'humidity', 'sky', 'wind', 'rain', 'thunder', 'axisBottom'];
  let y = 0;
  for (const key of order) {
    if (key === rowKey) return y;
    y += ROW[key];
  }
  return y;
}

function buildHourlyChart(timeline) {
  const n = timeline.length;
  const width = n * COL_W;
  const totalHeight = Object.values(ROW).reduce((a, b) => a + b, 0);
  const dates = timeline.map(p => new Date(p.t));

  let svg = `<svg viewBox="0 0 ${width} ${totalHeight}" width="${width}" height="${totalHeight}" xmlns="http://www.w3.org/2000/svg" font-family="-apple-system, sans-serif">`;
  svg += `<rect x="0" y="0" width="${width}" height="${totalHeight}" fill="#ffffff"/>`;

  // day/night shading bands
  dates.forEach((d, i) => {
    const isDay = d.getHours() >= 6 && d.getHours() < 18;
    svg += `<rect x="${i * COL_W}" y="0" width="${COL_W}" height="${totalHeight}" fill="${isDay ? '#fff8dc' : '#e4e9f2'}"/>`;
  });

  // day gridlines + labels
  let lastDay = null;
  dates.forEach((d, i) => {
    const dayStr = d.toDateString();
    const x = i * COL_W;
    if (dayStr !== lastDay) {
      svg += `<line x1="${x}" y1="0" x2="${x}" y2="${totalHeight}" stroke="#333" stroke-width="1.5"/>`;
      svg += `<text x="${x + 3}" y="${bandY('axisTop') + 17}" font-size="11" fill="#333" font-weight="700">${formatDayLabel(d)}</text>`;
      lastDay = dayStr;
    }
  });

  // row separator lines
  ['temp', 'humidity', 'sky', 'wind', 'rain', 'thunder'].forEach(key => {
    svg += `<line x1="0" y1="${bandY(key)}" x2="${width}" y2="${bandY(key)}" stroke="#888" stroke-width="1.5"/>`;
  });

  // hour axis (top, just above the temperature row)
  dates.forEach((d, i) => {
    const x = i * COL_W + COL_W / 2;
    svg += `<text x="${x}" y="${bandY('axisTop') + ROW.axisTop - 4}" font-size="9" fill="#555" text-anchor="middle">${formatHourLabel(d)}</text>`;
  });

  // hour axis (bottom)
  dates.forEach((d, i) => {
    const x = i * COL_W + COL_W / 2;
    svg += `<text x="${x}" y="${bandY('axisBottom') + 14}" font-size="9" fill="#555" text-anchor="middle">${formatHourLabel(d)}</text>`;
  });

  // temperature + heat index lines
  const temps = timeline.map(p => p.temp).filter(v => v !== null);
  const heatIdxVals = timeline.map(p => p.heatIndex).filter(v => v !== null);
  const allTempVals = temps.concat(heatIdxVals);
  const tMin = (allTempVals.length ? Math.min(...allTempVals) : 50) - 4;
  const tMax = (allTempVals.length ? Math.max(...allTempVals) : 90) + 4;
  const tRange = Math.max(tMax - tMin, 1);
  const tTop = bandY('temp'), tH = ROW.temp;
  const yForTemp = v => tTop + tH - ((v - tMin) / tRange) * tH;
  svg += `<text x="4" y="${tTop + 11}" font-size="10" fill="#555">Temp °F</text>`;
  svg += `<text x="4" y="${tTop + 22}" font-size="8" fill="#cc0000">— Temp</text>`;
  svg += `<text x="40" y="${tTop + 22}" font-size="8" fill="#e65100">- - Heat index</text>`;

  const hasHeatIndex = heatIdxVals.length > 0;
  if (hasHeatIndex) {
    const hiPts = timeline.map((p, i) => p.heatIndex === null ? null : `${i * COL_W + COL_W / 2},${yForTemp(p.heatIndex).toFixed(1)}`).filter(Boolean).join(' ');
    svg += `<polyline points="${hiPts}" fill="none" stroke="#e65100" stroke-width="2" stroke-dasharray="4,3"/>`;
    timeline.forEach((p, i) => {
      if (p.heatIndex === null || p.heatIndex <= p.temp) return;
      const x = i * COL_W + COL_W / 2;
      const y = yForTemp(p.heatIndex);
      svg += `<circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="#e65100"/>`;
      svg += `<text x="${x}" y="${(y - 7).toFixed(1)}" font-size="9" fill="#e65100" font-weight="600" text-anchor="middle">${p.heatIndex}°</text>`;
    });
  }

  const tempPts = timeline.map((p, i) => p.temp === null ? null : `${i * COL_W + COL_W / 2},${yForTemp(p.temp).toFixed(1)}`).filter(Boolean).join(' ');
  svg += `<polyline points="${tempPts}" fill="none" stroke="#cc0000" stroke-width="2"/>`;
  timeline.forEach((p, i) => {
    if (p.temp === null) return;
    const x = i * COL_W + COL_W / 2;
    const y = yForTemp(p.temp);
    svg += `<circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="#cc0000"/>`;
    svg += `<text x="${x}" y="${(y - 7).toFixed(1)}" font-size="9" fill="#900" font-weight="600" text-anchor="middle">${p.temp}°</text>`;
  });

  // humidity line — plot area is inset from the row's top/bottom so every
  // point (even 0% or 100%) has clear room to show its label below the line
  const hTop = bandY('humidity'), hH = ROW.humidity;
  const hPlotTop = hTop + 16, hPlotBottom = hTop + hH - 14, hPlotH = hPlotBottom - hPlotTop;
  const yForHum = v => hPlotBottom - (Math.max(0, Math.min(100, v)) / 100) * hPlotH;
  svg += `<text x="4" y="${hTop + 11}" font-size="10" fill="#555">Humidity %</text>`;
  const humPts = timeline.map((p, i) => p.humidity === null ? null : `${i * COL_W + COL_W / 2},${yForHum(p.humidity).toFixed(1)}`).filter(Boolean).join(' ');
  svg += `<polyline points="${humPts}" fill="none" stroke="#2e7d32" stroke-width="1.5"/>`;
  timeline.forEach((p, i) => {
    if (p.humidity === null) return;
    const x = i * COL_W + COL_W / 2;
    const y = yForHum(p.humidity);
    svg += `<circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="#2e7d32"/>`;
    svg += `<text x="${x}" y="${(y + 12).toFixed(1)}" font-size="9" fill="#2e7d32" font-weight="600" text-anchor="middle">${p.humidity}%</text>`;
  });

  // sky cover line
  const skTop = bandY('sky'), skH = ROW.sky;
  const skPlotTop = skTop + 16, skPlotBottom = skTop + skH - 14, skPlotH = skPlotBottom - skPlotTop;
  const yForSky = v => skPlotBottom - (Math.max(0, Math.min(100, v)) / 100) * skPlotH;
  svg += `<text x="4" y="${skTop + 11}" font-size="10" fill="#555">Sky cover %</text>`;
  const skyPts = timeline.map((p, i) => p.sky === null ? null : `${i * COL_W + COL_W / 2},${yForSky(p.sky).toFixed(1)}`).filter(Boolean).join(' ');
  svg += `<polyline points="${skyPts}" fill="none" stroke="#6a1b9a" stroke-width="1.5"/>`;
  timeline.forEach((p, i) => {
    if (p.sky === null) return;
    const x = i * COL_W + COL_W / 2;
    const y = yForSky(p.sky);
    svg += `<circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="#6a1b9a"/>`;
    svg += `<text x="${x}" y="${(y + 12).toFixed(1)}" font-size="9" fill="#6a1b9a" font-weight="600" text-anchor="middle">${p.sky}%</text>`;
  });

  // wind line: fixed scale (floor of 30 mph) so ordinary breezes don't look
  // dramatic just because they're the windiest moment in the current view
  const wTop = bandY('wind'), wH = ROW.wind;
  const windVals = timeline.map(p => p.windMph).filter(v => v !== null);
  const wMax = Math.max(30, ...windVals);
  const yForWind = v => wTop + wH - (Math.min(v, wMax) / wMax) * wH;
  svg += `<text x="4" y="${wTop + 11}" font-size="10" fill="#555">Wind mph</text>`;
  const windPts = timeline.map((p, i) => p.windMph === null ? null : `${i * COL_W + COL_W / 2},${yForWind(p.windMph).toFixed(1)}`).filter(Boolean).join(' ');
  svg += `<polyline points="${windPts}" fill="none" stroke="#455a64" stroke-width="2"/>`;
  timeline.forEach((p, i) => {
    if (p.windMph === null) return;
    const x = i * COL_W + COL_W / 2;
    const y = yForWind(p.windMph);
    svg += `<circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="#455a64"/>`;
    svg += `<text x="${x}" y="${(y - 6).toFixed(1)}" font-size="9" fill="#455a64" font-weight="600" text-anchor="middle">${p.windMph}${p.windDir}</text>`;
  });

  // precipitation potential line (probability) + expected amount (label, pinned to row bottom)
  const rTop = bandY('rain'), rH = ROW.rain;
  const rPlotTop = rTop + 16, rPlotBottom = rTop + rH - 28, rPlotH = rPlotBottom - rPlotTop;
  const yForPop = v => rPlotBottom - (Math.max(0, Math.min(100, v)) / 100) * rPlotH;

  // shade + outline a strip around the amount label itself, spanning the
  // columns its NOAA rain block covers, so it's clear the one number applies
  // across all of them without covering the rest of the row
  {
    const labelBoxH = 16;
    const labelBoxY = rTop + rH - labelBoxH - 1;
    let i = 0;
    while (i < timeline.length) {
      const key = timeline[i].qpfKey;
      if (key === null) { i++; continue; }
      let j = i;
      while (j + 1 < timeline.length && timeline[j + 1].qpfKey === key) j++;
      if (timeline[i].qpfIn > 0) {
        const xStart = i * COL_W, xEnd = (j + 1) * COL_W;
        svg += `<rect x="${xStart}" y="${labelBoxY}" width="${xEnd - xStart}" height="${labelBoxH}" fill="#1565c0" fill-opacity="0.12" stroke="#1565c0" stroke-width="1" stroke-opacity="0.5"/>`;
      }
      i = j + 1;
    }
  }

  svg += `<text x="4" y="${rTop + 11}" font-size="10" fill="#555">Precip potential %</text>`;
  const popPts = timeline.map((p, i) => p.pop === null ? null : `${i * COL_W + COL_W / 2},${yForPop(p.pop).toFixed(1)}`).filter(Boolean).join(' ');
  svg += `<polyline points="${popPts}" fill="none" stroke="#1565c0" stroke-width="1.5"/>`;
  timeline.forEach((p, i) => {
    const x = i * COL_W + COL_W / 2;
    if (p.pop !== null) {
      const y = yForPop(p.pop);
      svg += `<circle cx="${x}" cy="${y.toFixed(1)}" r="2.5" fill="#1565c0"/>`;
      svg += `<text x="${x}" y="${(y + 12).toFixed(1)}" font-size="9" fill="#1565c0" font-weight="600" text-anchor="middle">${p.pop}%</text>`;
    }
    if (p.qpfIn > 0) {
      svg += `<text x="${x}" y="${(rTop + rH - 2).toFixed(1)}" font-size="9" fill="#0d47a1" font-weight="600" text-anchor="middle">${p.qpfIn.toFixed(2)}"</text>`;
    }
  });

  // thunder: approximate chance above a lightning icon
  const thTop = bandY('thunder'), thH = ROW.thunder;
  timeline.forEach((p, i) => {
    if (p.thunderPct === null) return;
    const x = i * COL_W + COL_W / 2;
    svg += `<text x="${x}" y="${thTop + 12}" font-size="9" fill="#900" font-weight="600" text-anchor="middle">${p.thunderPct}%</text>`;
    svg += `<text x="${x}" y="${thTop + thH - 4}" font-size="15" text-anchor="middle">⚡</text>`;
  });

  svg += `</svg>`;

  const labels = `<div class="hc-labels">
    <div class="hc-row" style="height:${ROW.axisTop}px"></div>
    <div class="hc-row" style="height:${ROW.temp}px">Temp<br>°F</div>
    <div class="hc-row" style="height:${ROW.humidity}px">Humidity<br>%</div>
    <div class="hc-row" style="height:${ROW.sky}px">Sky<br>cover</div>
    <div class="hc-row" style="height:${ROW.wind}px">Wind<br>mph</div>
    <div class="hc-row" style="height:${ROW.rain}px">Precip<br>%&nbsp;/&nbsp;in</div>
    <div class="hc-row" style="height:${ROW.thunder}px">Thunder<br>%</div>
    <div class="hc-row" style="height:${ROW.axisBottom}px"></div>
  </div>`;

  return `<div class="hourly-chart">${labels}<div class="hc-scroll">${svg}</div></div>`;
}

const lastData = {}; // loc.id -> most recently rendered forecast data

function renderPanelContent(panelEl, loc, data) {
  lastData[loc.id] = data;
  const { periods, updated, timeline } = data;
  const updatedStr = updated ? new Date(updated).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) : '';

  const fcardHtml = p => {
    if (!p) return `<div class="fcard fcard-empty"></div>`;
    const pct = (p.probabilityOfPrecipitation && p.probabilityOfPrecipitation.value) || 0;
    const precipLines = [];
    if (pct > 0) precipLines.push(`${pct}% rain`);
    if (p.rainIn > 0) precipLines.push(`${p.rainIn}" rain`);
    return `<div class="fcard">
      <div class="name">${escapeHtml(p.name)}</div>
      <div class="icon">${iconFor(p.shortForecast, p.isDaytime)}</div>
      <div class="temp">${p.temperature}°</div>
      <div class="precip">${precipLines.join('<br>')}</div>
      <div class="wind">${escapeHtml(p.windDirection || '')} ${escapeHtml(p.windSpeed || '')}</div>
    </div>`;
  };

  // Group periods by calendar date so each column pairs the same day's
  // daytime/nighttime cards top/bottom — the raw NOAA list can start on an
  // unpaired "Tonight" period (when fetched overnight), which would otherwise
  // shift every later pair by one and mismatch days across the two grid rows.
  const dayColumns = new Map();
  periods.slice(0, 14).forEach(p => {
    const d = new Date(p.startTime);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    if (!dayColumns.has(key)) dayColumns.set(key, {});
    dayColumns.get(key)[p.isDaytime ? 'day' : 'night'] = p;
  });

  const cardsHtml = Array.from(dayColumns.values())
    .map(({ day, night }) => fcardHtml(day) + fcardHtml(night))
    .join('');

  const detailHtml = periods.slice(0, 6).map(p => `
    <div class="detail-item"><b>${escapeHtml(p.name)}:</b> ${escapeHtml(p.detailedForecast)}</div>
  `).join('');

  const sourceBits = [];
  if (data.suggestedLabel) sourceBits.push(`NOAA resolved to <b>${escapeHtml(data.suggestedLabel)}</b>`);
  if (data.station) sourceBits.push(`nearest station <b>${escapeHtml(data.station.id)}</b> (${escapeHtml(data.station.name)})`);
  if (data.gridId) sourceBits.push(`grid ${escapeHtml(data.gridId)} ${data.gridX},${data.gridY}`);
  const sourceStr = sourceBits.join(' · ');

  panelEl.innerHTML = panelHeaderHtml(loc) +
    `<div class="updated-row"><span>Updated ${escapeHtml(updatedStr)}</span><button class="refresh-btn" data-action="refresh">Refresh</button></div>
    ${sourceStr ? `<div class="source-row">${sourceStr}</div>` : ''}
    <div class="chart-section">
      <h2>Hourly forecast (next 7 days — scroll sideways)</h2>
      ${buildHourlyChart(timeline)}
    </div>
    <div class="chart-section">
      <h2>Daily summary</h2>
      <div class="cards">${cardsHtml}</div>
    </div>
    <div class="detailed-list">${detailHtml}</div>`;
}

const state = {
  locations: loadLocations(),
  activeId: null,
};

const tabsEl = document.getElementById('tabs');
const panelsEl = document.getElementById('panels');

function panelHeaderHtml(loc) {
  return `<div class="panel-header-wrap">
    <div class="panel-header">
      <h1>${escapeHtml(loc.label)}</h1>
      <button class="edit-btn" data-action="edit" data-id="${loc.id}">✎</button>
    </div>
  </div>`;
}

function renderTabs() {
  tabsEl.innerHTML = state.locations.map(loc =>
    `<button class="tab${loc.id === state.activeId ? ' active' : ''}" data-id="${loc.id}">${escapeHtml(loc.label)}</button>`
  ).join('');
}

function renderPanels() {
  panelsEl.innerHTML = state.locations.map(loc =>
    `<section class="panel${loc.id === state.activeId ? ' active' : ''}" data-id="${loc.id}">
      ${panelHeaderHtml(loc)}
      <div class="status">Loading forecast…</div>
    </section>`
  ).join('');
  state.locations.forEach(loc => loadForecastInto(loc));
}

async function loadForecastInto(loc, force) {
  const panelEl = panelsEl.querySelector(`.panel[data-id="${loc.id}"]`);
  if (!panelEl) return;

  try {
    const cached = !force && readCache(loc.lat, loc.lon);
    if (cached && Date.now() - cached.savedAt < CACHE_MAX_AGE_MS) {
      renderPanelContent(panelEl, loc, cached);
      return;
    }
    if (cached) renderPanelContent(panelEl, loc, cached);

    const fresh = await resolveAndFetchForecast(loc.lat, loc.lon);
    writeCache(loc.lat, loc.lon, fresh);
    renderPanelContent(panelEl, loc, fresh);
    if (fresh.suggestedLabel && loc.label.startsWith('New location')) {
      loc.label = fresh.suggestedLabel;
      saveLocations(state.locations);
      renderTabs();
    }
  } catch (err) {
    panelEl.innerHTML = panelHeaderHtml(loc) +
      `<div class="status error">${escapeHtml(err.message || 'Could not load forecast.')}<br><button class="refresh-btn" data-action="refresh">Try again</button></div>`;
  }
}

function setActive(id) {
  state.activeId = id;
  renderTabs();
  panelsEl.querySelectorAll('.panel').forEach(p => p.classList.toggle('active', p.dataset.id === id));
}

tabsEl.addEventListener('click', e => {
  const btn = e.target.closest('.tab');
  if (btn) setActive(btn.dataset.id);
});

panelsEl.addEventListener('click', e => {
  const refreshBtn = e.target.closest('[data-action="refresh"]');
  if (refreshBtn) {
    const panel = refreshBtn.closest('.panel');
    const loc = state.locations.find(l => l.id === panel.dataset.id);
    if (loc) {
      panel.innerHTML = panelHeaderHtml(loc) + `<div class="status">Loading forecast…</div>`;
      loadForecastInto(loc, true);
    }
    return;
  }
  const editBtn = e.target.closest('[data-action="edit"]');
  if (editBtn) openEditModal(editBtn.dataset.id);
});

// Add location modal
const addModal = document.getElementById('addModal');
const addInput = document.getElementById('addInput');
const addError = document.getElementById('addError');

document.getElementById('addTabBtn').addEventListener('click', () => {
  addInput.value = '';
  addError.classList.add('hidden');
  addModal.classList.remove('hidden');
  addInput.focus();
});

document.getElementById('addCancelBtn').addEventListener('click', () => addModal.classList.add('hidden'));

document.getElementById('addConfirmBtn').addEventListener('click', async () => {
  const addConfirmBtn = document.getElementById('addConfirmBtn');
  const text = addInput.value.trim();
  addError.classList.add('hidden');
  let parsed = parseLatLonFromInput(text);

  if (!parsed && text) {
    addConfirmBtn.disabled = true;
    addConfirmBtn.textContent = 'Looking up…';
    try {
      parsed = await geocodePlace(text);
    } catch (e) {
      parsed = null;
    }
    addConfirmBtn.disabled = false;
    addConfirmBtn.textContent = 'Add';
  }

  if (!parsed) {
    addError.textContent = 'Could not find that. Try "City, State", a forecast.weather.gov link, or coordinates like 40.64, -74.35.';
    addError.classList.remove('hidden');
    return;
  }
  const id = 'loc-' + Date.now();
  const newLoc = { id, label: 'New location…', lat: parsed.lat, lon: parsed.lon };
  state.locations.push(newLoc);
  saveLocations(state.locations);
  addModal.classList.add('hidden');
  setActive(id);
  renderPanels();
});

// Edit / remove modal
const editModal = document.getElementById('editModal');
const editInput = document.getElementById('editInput');
let editingId = null;

function openEditModal(id) {
  editingId = id;
  const loc = state.locations.find(l => l.id === id);
  if (!loc) return;
  editInput.value = loc.label;
  editModal.classList.remove('hidden');
  editInput.focus();
}

document.getElementById('editCancelBtn').addEventListener('click', () => editModal.classList.add('hidden'));

document.getElementById('editConfirmBtn').addEventListener('click', () => {
  const loc = state.locations.find(l => l.id === editingId);
  if (loc && editInput.value.trim()) {
    loc.label = editInput.value.trim();
    saveLocations(state.locations);
    renderTabs();
  }
  editModal.classList.add('hidden');
});

document.getElementById('removeBtn').addEventListener('click', () => {
  if (state.locations.length <= 1) {
    editModal.classList.add('hidden');
    return;
  }
  state.locations = state.locations.filter(l => l.id !== editingId);
  saveLocations(state.locations);
  editModal.classList.add('hidden');
  setActive(state.locations[0].id);
  renderPanels();
});

// init
state.activeId = state.locations[0].id;
renderTabs();
renderPanels();
