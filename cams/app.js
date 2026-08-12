// ---------- cam data (north to south) ----------
// `thumb` = static preview image shown on the home-screen grid tile. Not all
// vendors expose one (see CLAUDE.md "Thumbnails" section) — cams without a
// `thumb` fall back to a plain placeholder tile in renderTile().

const CAMS = [
  {
    id: 'barnegat-inlet',
    town: 'Barnegat Light',
    name: 'Barnegat Inlet Cam',
    source: 'Joy Luedtke Real Estate (YouTube Live)',
    type: 'iframe',
    embedUrl: 'https://www.youtube.com/embed/VOJ1k88ZVNE',
    pageUrl: 'https://www.joyislbi.com/webcam',
    thumb: 'https://www.joyislbi.com/uploads/feature/webcam-og-12x9-lg.jpg',
    note: "This provider's YouTube livestream is offline (confirmed again 2026-08-12, same as the day before — the box below will say \"stream recording is not available\" until they restart it). Not an app problem; it'll start working again on its own once they do.",
  },
  {
    id: 'harvey-cedars-tower',
    town: 'Harvey Cedars',
    name: 'Water Tower Cam',
    source: 'Coastal Camera Network',
    type: 'image',
    imageUrl: 'https://ccn-media.coastalcameranetwork.com/New_Jersey/harveycedars.stream/latest.jpg',
    pageUrl: 'https://www.harveycedars.org/cn/webpage.cfm?tpid=16942',
  },
  {
    id: 'sc-main-causeway',
    town: 'Surf City',
    name: 'Main Causeway',
    source: 'iloveseaisle.com',
    type: 'link',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.main.causeway.cam.php',
    note: "This camera runs on AccuWeather's widget platform, which has been down (server error 503) for at least 2 days straight as of 2026-08-12 — not something this app can fix. It used to be embeddable directly; changed to a plain \"open\" link for now so a dead widget doesn't dump you onto the provider's full website. Worth trying again in a few weeks in case AccuWeather restores it.",
  },
  {
    id: 'sc-8th-west',
    town: 'Surf City',
    name: '8th St Causeway (West)',
    source: 'iloveseaisle.com',
    type: 'link',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.8thst.causeway.west.pan.cam.php',
    note: "Same AccuWeather widget outage as the Main Causeway cam above (503 error, ongoing 2+ days as of 2026-08-12) — not fixable from this app.",
  },
  {
    id: 'sc-9th-east',
    town: 'Surf City',
    name: '9th St Causeway (East)',
    source: 'iloveseaisle.com',
    type: 'link',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.9thst.causeway.east.pan.cam.php',
    note: "Same AccuWeather widget outage as the Main Causeway cam above (503 error, ongoing 2+ days as of 2026-08-12) — not fixable from this app.",
  },
  {
    id: 'sc-southeast-beach',
    town: 'Surf City',
    name: 'Southeast Beach (Wide)',
    source: 'iloveseaisle.com',
    type: 'link',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.southeast.wide.cam.php',
    note: "Same AccuWeather widget outage as the Main Causeway cam above (503 error, ongoing 2+ days as of 2026-08-12) — not fixable from this app.",
  },
  {
    id: 'scyc-west',
    town: 'Surf City',
    name: 'Yacht Club - West (Bay/Docks)',
    source: 'Surf City Yacht Club',
    type: 'iframe',
    embedUrl: 'https://g1.ipcamlive.com/player/player.php?alias=scycwest&autoplay=1&mute=1',
    pageUrl: 'https://scyc-nj.org/live-cam',
    thumb: 'thumbs/scyc-west.jpg',
  },
  {
    id: 'scyc-marina-west',
    town: 'Surf City',
    name: 'Yacht Club - Marina/Boatyard',
    source: 'Surf City Yacht Club',
    type: 'iframe',
    embedUrl: 'https://g1.ipcamlive.com/player/player.php?alias=scycboatyard&autoplay=1&mute=1',
    pageUrl: 'https://scyc-nj.org/live-cam',
    thumb: 'thumbs/scyc-marina-west.jpg',
  },
  {
    id: 'scyc-north',
    town: 'Surf City',
    name: 'Yacht Club - North (Boat Storage)',
    source: 'Surf City Yacht Club',
    type: 'iframe',
    embedUrl: 'https://g1.ipcamlive.com/player/player.php?alias=scycnorth&autoplay=1&mute=1',
    pageUrl: 'https://scyc-nj.org/live-cam',
    thumb: 'thumbs/scyc-north.jpg',
  },
  {
    id: 'ship-bottom-drifting-sands',
    town: 'Ship Bottom',
    name: 'Drifting Sands Hotel Beach Cam',
    source: 'dslbi.com',
    type: 'link',
    directLink: true,
    note: "This site doesn't allow its cam to be shown inside other apps — tap below to open it directly.",
    pageUrl: 'https://www.dslbi.com/beach-camera.htm',
    thumb: 'https://www.dslbi.com/files/4448/Ship_Bottom_New_Jersey_Beach.png',
  },
  {
    id: 'beach-haven-surf',
    town: 'Beach Haven',
    name: 'Beach Haven Surf Cam',
    source: 'NJ Beach Cams',
    type: 'iframe',
    embedUrl: 'https://njbeachcams.com/beach-cams/network/lbi.php',
    pageUrl: 'https://njbeachcams.com/central-new-jersey/beach-haven-surf-cam/',
    thumb: 'https://njbeachcams.com/wp-content/uploads/2020/02/beach-haven-webcam.jpg',
    note: "This provider's video stream is currently returning a server error on their end (confirmed 2026-08-12) — the box below may be blank until they fix it. Nothing wrong with the app.",
  },
  {
    id: 'flow-house',
    town: 'Beach Haven',
    name: 'Flow House LBI Webcam',
    source: 'NJ Beach Cams',
    type: 'iframe',
    embedUrl: 'https://njbeachcams.com/beach-cams/network/flowhouse.php',
    pageUrl: 'https://njbeachcams.com/central-new-jersey/flow-house-lbi-webcam/',
    thumb: 'https://njbeachcams.com/wp-content/uploads/2022/04/flow-house-lbi-webcam.jpg',
    note: "This provider's video stream is currently returning a server error on their end (confirmed 2026-08-12) — the box below may be blank until they fix it. Nothing wrong with the app.",
  },
  {
    id: 'the-hideaway',
    town: 'Holgate / South LBI',
    name: 'The Hideaway Cam',
    source: 'IPCamLive',
    type: 'iframe',
    embedUrl: 'https://g1.ipcamlive.com/player/player.php?alias=6606e0e3a7b57&skin=white&autoplay=1&mute=1&disabledownloadbutton=1',
    pageUrl: 'https://www.thehideawaylbi.com/surf-cam',
    note: "This camera itself is offline at the source right now (confirmed 2026-08-12 — the player just spins on \"connecting\"), not an app problem. No preview thumbnail is available from this vendor even when it's up.",
  },
  {
    id: 'lbt-38th-north',
    town: 'Township Traffic Cams',
    name: '38th St, LBB (North)',
    source: 'Long Beach Township',
    type: 'link',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
    thumb: 'thumbs/lbt-38th-north.jpg',
    note: "This township relay only serves video over an insecure (non-HTTPS) connection, which phones and browsers block when loaded from this secure app — confirmed not fixable from here (the township would need to add HTTPS on their end). Tap below to view it directly on their own page instead; the preview above is a real recent snapshot, not live.",
  },
  {
    id: 'lbt-38th-south',
    town: 'Township Traffic Cams',
    name: '38th St, LBB (South)',
    source: 'Long Beach Township',
    type: 'link',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
    thumb: 'thumbs/lbt-38th-south.jpg',
    note: "Same insecure-connection limitation as the other township cams (see 38th St North) — tap below to view it directly on their own page. Preview above is a real recent snapshot, not live.",
  },
  {
    id: 'lbt-28th-south',
    town: 'Township Traffic Cams',
    name: '28th St, LBB (South)',
    source: 'Long Beach Township',
    type: 'link',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
    thumb: 'thumbs/lbt-28th-south.jpg',
    note: "Same insecure-connection limitation as the other township cams (see 38th St North) — tap below to view it directly on their own page. Preview above is a real recent snapshot, not live.",
  },
  {
    id: 'lbt-holgate',
    town: 'Township Traffic Cams',
    name: 'Holgate',
    source: 'Long Beach Township',
    type: 'link',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
    note: "Same insecure-connection limitation as the other township cams (see 38th St North) — tap below to view it directly on their own page. This one was also showing \"Video Temporarily Down\" at the source when last checked (2026-08-12), so no preview snapshot is shown.",
  },
  {
    id: 'lbt-28th-north',
    town: 'Township Traffic Cams',
    name: '28th St, LBB (North)',
    source: 'Long Beach Township',
    type: 'link',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
    note: "Same insecure-connection limitation as the other township cams (see 38th St North) — tap below to view it directly on their own page. This one was also showing \"Video Temporarily Down\" at the source when last checked (2026-08-12), so no preview snapshot is shown.",
  },
];

// ---------- derive towns (ordered, unique) and per-town cam lists ----------

const TOWNS = [...new Set(CAMS.map(c => c.town))];
const CAMS_BY_TOWN = Object.fromEntries(
  TOWNS.map(t => [t, CAMS.filter(c => c.town === t)])
);

// ---------- state ----------
// Single-page app: 'list' shows a thumbnail grid, one tile per cam, grouped
// by town heading. Nothing live-loads on this screen (grid thumbnails are
// static/one-time image fetches, not continuous streams) — keeps it light
// and fast, and doesn't leave multiple live video connections running.
// 'detail' shows one cam full-size; the header's Back button returns to 'list'.

let view = 'list';
let detailCamId = null;

// ---------- rendering ----------

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const child of children) node.appendChild(child);
  return node;
}

function openCam(camId) {
  detailCamId = camId;
  view = 'detail';
  render();
}

function goBack() {
  stopImageRefresh();
  view = 'list';
  detailCamId = null;
  render();
}

// Interval id for the currently-open 'image' cam's periodic refresh, so it
// can be cleared when leaving the detail view (no point re-fetching a
// snapshot no one is looking at).
let imageRefreshTimer = null;

function stopImageRefresh() {
  if (imageRefreshTimer) { clearInterval(imageRefreshTimer); imageRefreshTimer = null; }
}

function renderCamContent(cam) {
  const wrap = el('div', { class: 'cam-frame-wrap' });

  if (cam.type === 'iframe') {
    const iframe = el('iframe', {
      class: 'cam-frame',
      src: cam.embedUrl,
      loading: 'lazy',
      allow: 'fullscreen',
    });
    wrap.appendChild(iframe);
  } else if (cam.type === 'image') {
    // Periodic snapshot (not a continuous stream) — re-fetch every 15s
    // with a cache-busting timestamp so it updates while Jeff is looking.
    const img = el('img', {
      class: 'cam-frame cam-stream-img',
      src: cam.imageUrl + '?t=' + Date.now(),
      alt: cam.name,
    });
    wrap.appendChild(img);
    imageRefreshTimer = setInterval(() => {
      img.src = cam.imageUrl + '?t=' + Date.now();
    }, 15000);
  } else if (cam.type === 'link') {
    const card = el('div', { class: 'cam-link-card' });
    const a = el('a', { class: 'open-cam-btn', href: cam.pageUrl, target: '_blank', rel: 'noopener', text: 'Open live cam ↗' });
    card.appendChild(a);
    wrap.appendChild(card);
  }

  return wrap;
}

// Inline camera-off icon for grid tiles that have no preview image available.
function placeholderIcon() {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('class', 'tile-placeholder-icon');
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('fill', 'currentColor');
  path.setAttribute('d', 'M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4Zm-2 5.5H5V8h10v8ZM3.3 2.3 2 3.6l2 2V17a2 2 0 0 0 2 2h11.4l2 2 1.3-1.3L3.3 2.3Z');
  svg.appendChild(path);
  return svg;
}

function renderTile(cam) {
  // Cams flagged `directLink` have nothing to show in the detail view beyond
  // a note + "open" button (their source can't be embedded at all) — the
  // tile itself is a real link straight to pageUrl, skipping that extra tap.
  const tile = cam.directLink
    ? el('a', { class: 'cam-tile', href: cam.pageUrl, target: '_blank', rel: 'noopener' })
    : el('button', { class: 'cam-tile' });
  tile.appendChild(el('div', { class: 'tile-label', text: cam.name }));

  const thumbWrap = el('div', { class: 'tile-thumb-wrap' });
  if (cam.thumb) {
    thumbWrap.appendChild(el('img', { class: 'tile-thumb', src: cam.thumb, alt: cam.name, loading: 'lazy' }));
  } else if (cam.type === 'image') {
    thumbWrap.appendChild(el('img', { class: 'tile-thumb', src: cam.imageUrl, alt: cam.name, loading: 'lazy' }));
  } else {
    const placeholder = el('div', { class: 'tile-placeholder' });
    placeholder.appendChild(placeholderIcon());
    thumbWrap.appendChild(placeholder);
  }
  tile.appendChild(thumbWrap);

  if (!cam.directLink) tile.addEventListener('click', () => openCam(cam.id));
  return tile;
}

function renderList() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const list = el('div', { class: 'cam-list' });
  for (const town of TOWNS) {
    list.appendChild(el('div', { class: 'town-heading', text: town }));
    const grid = el('div', { class: 'cam-grid' });
    for (const cam of CAMS_BY_TOWN[town]) {
      grid.appendChild(renderTile(cam));
    }
    list.appendChild(grid);
  }
  content.appendChild(list);
}

function renderDetail() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const cam = CAMS.find(c => c.id === detailCamId);
  if (!cam) { goBack(); return; }

  const detail = el('div', { class: 'cam-detail' });
  detail.appendChild(el('div', { class: 'detail-town', text: cam.town }));
  detail.appendChild(el('h2', { class: 'detail-name', text: cam.name }));
  detail.appendChild(el('div', { class: 'source-row', text: `Source: ${cam.source}` }));
  if (cam.note) detail.appendChild(el('p', { class: 'cam-note', text: cam.note }));
  detail.appendChild(renderCamContent(cam));

  if (cam.type !== 'link') {
    const openRow = el('div', { class: 'open-source-row' });
    const a = el('a', { href: cam.pageUrl, target: '_blank', rel: 'noopener', text: 'Open source page ↗' });
    openRow.appendChild(a);
    detail.appendChild(openRow);
  }

  content.appendChild(detail);
}

function render() {
  const backBtn = document.getElementById('backBtn');
  const pageTitle = document.getElementById('pageTitle');

  if (view === 'detail') {
    backBtn.hidden = false;
    const cam = CAMS.find(c => c.id === detailCamId);
    pageTitle.textContent = cam ? cam.name : 'LBI Cams';
    renderDetail();
  } else {
    backBtn.hidden = true;
    pageTitle.textContent = 'LBI Cams';
    renderList();
  }
}

document.getElementById('backBtn').addEventListener('click', goBack);

render();
