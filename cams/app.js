// ---------- cam data (north to south) ----------

const CAMS = [
  {
    id: 'barnegat-inlet',
    town: 'Barnegat Light',
    name: 'Barnegat Inlet Cam',
    source: 'Joy Luedtke Real Estate',
    type: 'iframe',
    pageUrl: 'https://www.joyislbi.com/webcam',
  },
  {
    id: 'harvey-cedars-tower',
    town: 'Harvey Cedars',
    name: 'Water Tower Cam',
    source: 'Harvey Cedars Borough',
    type: 'iframe',
    pageUrl: 'https://www.harveycedars.org/cn/webpage.cfm?tpid=16942',
  },
  {
    id: 'sc-main-causeway',
    town: 'Surf City',
    name: 'Main Causeway',
    source: 'iloveseaisle.com',
    type: 'iframe',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.main.causeway.cam.php',
  },
  {
    id: 'sc-8th-west',
    town: 'Surf City',
    name: '8th St Causeway (West)',
    source: 'iloveseaisle.com',
    type: 'iframe',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.8thst.causeway.west.pan.cam.php',
  },
  {
    id: 'sc-9th-east',
    town: 'Surf City',
    name: '9th St Causeway (East)',
    source: 'iloveseaisle.com',
    type: 'iframe',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.9thst.causeway.east.pan.cam.php',
  },
  {
    id: 'sc-southeast-beach',
    town: 'Surf City',
    name: 'Southeast Beach (Wide)',
    source: 'iloveseaisle.com',
    type: 'iframe',
    pageUrl: 'https://www.iloveseaisle.com/lbi.beach.southeast.wide.cam.php',
  },
  {
    id: 'ship-bottom-drifting-sands',
    town: 'Ship Bottom',
    name: 'Drifting Sands Hotel Beach Cam',
    source: 'dslbi.com',
    type: 'link',
    note: "This site doesn't allow its cam to be shown inside other apps — tap below to open it directly.",
    pageUrl: 'https://www.dslbi.com/beach-camera.htm',
  },
  {
    id: 'beach-haven-surf',
    town: 'Beach Haven',
    name: 'Beach Haven Surf Cam',
    source: 'NJ Beach Cams',
    type: 'iframe',
    pageUrl: 'https://njbeachcams.com/central-new-jersey/beach-haven-surf-cam/',
  },
  {
    id: 'flow-house',
    town: 'Beach Haven',
    name: 'Flow House LBI Webcam',
    source: 'NJ Beach Cams',
    type: 'iframe',
    pageUrl: 'https://njbeachcams.com/central-new-jersey/flow-house-lbi-webcam/',
  },
  {
    id: 'lbi-foundation',
    town: 'Beach Haven',
    name: 'LBI Foundation of the Arts & Sciences',
    source: 'livebeaches.com',
    type: 'iframe',
    pageUrl: 'https://www.livebeaches.com/webcams/long-beach-island-foundation-live-webcam/',
  },
  {
    id: 'the-hideaway',
    town: 'Holgate / South LBI',
    name: 'The Hideaway Cam',
    source: 'livebeaches.com',
    type: 'iframe',
    pageUrl: 'https://www.livebeaches.com/webcams/long-beach-island-nj-webcam-the-hideaway/',
  },
  {
    id: 'lbt-38th-north',
    town: 'Township Traffic Cams',
    name: '38th St, LBB (North)',
    source: 'Long Beach Township',
    type: 'stream',
    streamUrl: 'http://lbtpublic.packetalk.net:5350/video/1/0/fps=30/',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
  },
  {
    id: 'lbt-38th-south',
    town: 'Township Traffic Cams',
    name: '38th St, LBB (South)',
    source: 'Long Beach Township',
    type: 'stream',
    streamUrl: 'http://lbtpublic.packetalk.net:5350/video/2/0/fps=30/',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
  },
  {
    id: 'lbt-28th-south',
    town: 'Township Traffic Cams',
    name: '28th St, LBB (South)',
    source: 'Long Beach Township',
    type: 'stream',
    streamUrl: 'http://lbtpublic.packetalk.net:5350/video/3/0/fps=30/',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
  },
  {
    id: 'lbt-holgate',
    town: 'Township Traffic Cams',
    name: 'Holgate',
    source: 'Long Beach Township',
    type: 'stream',
    streamUrl: 'http://lbtpublic.packetalk.net:5350/video/4/0/fps=30/',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
  },
  {
    id: 'lbt-28th-north',
    town: 'Township Traffic Cams',
    name: '28th St, LBB (North)',
    source: 'Long Beach Township',
    type: 'stream',
    streamUrl: 'http://lbtpublic.packetalk.net:5350/video/5/0/fps=30/',
    pageUrl: 'http://lbtpublic.packetalk.net:5350/IVC/views.htm',
  },
];

// ---------- derive towns (ordered, unique) and per-town cam lists ----------

const TOWNS = [...new Set(CAMS.map(c => c.town))];
const CAMS_BY_TOWN = Object.fromEntries(
  TOWNS.map(t => [t, CAMS.filter(c => c.town === t)])
);

// ---------- state ----------
// Single-page app: 'list' shows every cam's location as a tappable row
// (nothing live-loads on this screen — keeps it light and fast).
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
  view = 'list';
  detailCamId = null;
  render();
}

function renderCamContent(cam) {
  const wrap = el('div', { class: 'cam-frame-wrap' });

  if (cam.type === 'iframe') {
    const iframe = el('iframe', {
      class: 'cam-frame',
      src: cam.pageUrl,
      loading: 'lazy',
      allow: 'fullscreen',
    });
    wrap.appendChild(iframe);
  } else if (cam.type === 'stream') {
    const img = el('img', {
      class: 'cam-frame cam-stream-img',
      src: cam.streamUrl + Date.now(),
      alt: cam.name,
    });
    wrap.appendChild(img);
  } else if (cam.type === 'link') {
    const card = el('div', { class: 'cam-link-card' });
    if (cam.note) card.appendChild(el('p', { class: 'cam-note', text: cam.note }));
    const a = el('a', { class: 'open-cam-btn', href: cam.pageUrl, target: '_blank', rel: 'noopener', text: 'Open live cam ↗' });
    card.appendChild(a);
    wrap.appendChild(card);
  }

  return wrap;
}

function renderList() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const list = el('div', { class: 'cam-list' });
  for (const town of TOWNS) {
    list.appendChild(el('div', { class: 'town-heading', text: town }));
    for (const cam of CAMS_BY_TOWN[town]) {
      const row = el('button', { class: 'cam-row' });
      const textWrap = el('div', { class: 'cam-row-text' });
      textWrap.appendChild(el('div', { class: 'cam-row-name', text: cam.name }));
      textWrap.appendChild(el('div', { class: 'cam-row-source', text: cam.source }));
      row.appendChild(textWrap);
      row.appendChild(el('div', { class: 'cam-row-chevron', text: '›' }));
      row.addEventListener('click', () => openCam(cam.id));
      list.appendChild(row);
    }
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
