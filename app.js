(function () {
'use strict';

/* ============ datos ============ */
const MODS = ((window.CURSO && window.CURSO.modulos) || []).slice().sort((a, b) => (a.orden || 0) - (b.orden || 0));
const BY_ID = {};
MODS.forEach((m, n) => {
  BY_ID[m.id] = m; m._n = n + 1;
  (m.preguntas || []).forEach((q, i) => { q._id = m.id + '#' + i; q._mod = m; });
});
const ALLQ = MODS.flatMap(m => m.preguntas || []);
const QBY = Object.fromEntries(ALLQ.map(q => [q._id, q]));
const CLAVE = ['html-semantica', 'html-formularios', 'css-selectores', 'css-cascada', 'css-caja', 'css-flexbox', 'css-grid', 'css-responsive'];
const MIN = { 'Básico': 3, 'Intermedio': 5, 'Avanzado': 7 };

/* ============ progreso (localStorage, opcional) ============ */
const KEY = 'practica-html-css.v1';
const base = () => ({ mods: {}, fallos: [], resp: 0, ok: 0, sims: [], tema: null });
let S = base();
try { const raw = JSON.parse(localStorage.getItem(KEY) || 'null'); if (raw && typeof raw === 'object') S = Object.assign(base(), raw); } catch (e) {}
S.fallos = (S.fallos || []).filter(id => QBY[id]);
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function st(id) { return S.mods[id] || (S.mods[id] = { visto: false, mejor: null, reto: false }); }
const dominado = id => { const s = S.mods[id]; return !!(s && s.mejor != null && s.mejor >= 80); };

/* ============ utilidades ============ */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const app = $('#app'), sidebar = $('#sidebar');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function md(s) {
  return String(s == null ? '' : s).split(/(`[^`]+`)/).map((p, i) =>
    i % 2 ? '<code>' + esc(p.slice(1, -1)) + '</code>' : esc(p).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  ).join('');
}
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
function norm(s) {
  return String(s == null ? '' : s).toLowerCase().trim()
    .replace(/[;\s]+$/, '').replace(/^<\/?\s*/, '').replace(/\s*\/?>$/, '')
    .replace(/[“”«»]/g, '"').replace(/'/g, '"')
    .replace(/\s+/g, ' ').replace(/\s*([:,()=>+~{}])\s*/g, '$1');
}
const acierta = (q, txt) => (q.respuestas || []).some(r => norm(r) === norm(txt));
const tipoCodigo = t => /[<>:#.(){}\[\]@*=]|^-|^[a-z-]+$/.test(t);

/* ============ resaltado de sintaxis ============ */
const sp = (c, t) => '<span class="' + c + '">' + esc(t) + '</span>';
function hlHTML(src) {
  const re = /<!--[\s\S]*?-->|<!doctype[^>]*>|<\/?[a-zA-Z][\w:-]*(?:\s(?:[^<>"']|"[^"]*"|'[^']*')*)?\/?>/gi;
  let out = '', last = 0, m;
  while ((m = re.exec(src))) {
    out += esc(src.slice(last, m.index));
    const t = m[0];
    if (t.startsWith('<!--')) out += sp('t-com', t);
    else if (t[1] === '!') out += sp('t-doc', t);
    else out += hlTag(t);
    last = m.index + t.length;
  }
  return out + esc(src.slice(last));
}
function hlTag(t) {
  const m = t.match(/^(<\/?)([\w:-]+)([\s\S]*?)(\/?>)$/);
  if (!m) return esc(t);
  const s = m[3], ra = /([^\s=\/"']+)(?:(\s*=\s*)("[^"]*"|'[^']*'|[^\s"'>]+))?/g;
  let attrs = '', last = 0, a;
  while ((a = ra.exec(s))) {
    attrs += esc(s.slice(last, a.index)) + sp('t-attr', a[1]) + (a[2] ? esc(a[2]) + sp('t-str', a[3]) : '');
    last = a.index + a[0].length;
  }
  attrs += esc(s.slice(last));
  return sp('t-punc', m[1]) + sp('t-tag', m[2]) + attrs + sp('t-punc', m[4]);
}
function hlCSS(src) {
  const re = /\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[{};]|[^{};"'\/]+|\//g;
  let out = '', buf = '', depth = 0, m;
  function flush(kind) {
    if (!buf) return;
    const lead = buf.match(/^\s*/)[0], rest = buf.slice(lead.length), trail = rest.match(/\s*$/)[0], core = rest.slice(0, rest.length - trail.length);
    if (!core || kind === 'raw') out += esc(buf);
    else if (core[0] === '@') { const mm = core.match(/^(@[\w-]+)([\s\S]*)$/); out += esc(lead) + sp('t-at', mm[1]) + esc(mm[2]) + esc(trail); }
    else if (kind === 'sel') out += esc(lead) + sp('t-sel', core) + esc(trail);
    else if (core.indexOf(':') > 0) { const k = core.indexOf(':'); out += esc(lead) + sp('t-prop', core.slice(0, k)) + ':' + sp('t-val', core.slice(k + 1)) + esc(trail); }
    else out += esc(buf);
    buf = '';
  }
  while ((m = re.exec(src))) {
    const t = m[0];
    if (t.startsWith('/*')) { flush('raw'); out += sp('t-com', t); }
    else if (t === '{') { flush('sel'); out += '{'; depth++; }
    else if (t === '}') { flush('decl'); out += '}'; depth = Math.max(0, depth - 1); }
    else if (t === ';') { flush('decl'); out += ';'; }
    else buf += t;
  }
  flush(depth > 0 ? 'decl' : 'raw');
  return out;
}
const hl = (code, lang) => lang === 'css' ? hlCSS(code) : hlHTML(code);
const codeBlock = (code, lang) => '<pre class="code" data-lang="' + esc(lang || '') + '"><code>' + hl(String(code), lang) + '</code></pre>';

/* ============ documento del iframe ============ */
const HELPER = '<script>(function(){' +
  'document.addEventListener("submit",function(e){e.preventDefault();var f=e.target,s=[];try{new FormData(f).forEach(function(v,k){s.push(k+"="+(typeof v==="string"?v:(v&&v.name)||""));});}catch(_){}' +
  'var p=document.getElementById("__envio")||document.createElement("p");p.id="__envio";p.textContent="✓ Formulario válido. Se enviaría por "+(f.getAttribute("method")||"get").toUpperCase()+": "+(s.join("&")||"(ningún campo tiene name)");' +
  'p.setAttribute("style","font:13px/1.4 system-ui,sans-serif;background:#dcfce7;color:#14532d;padding:8px 10px;border-radius:6px;margin:8px 0");f.insertAdjacentElement("afterend",p);});' +
  'document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a)return;var h=a.getAttribute("href")||"";if(h.charAt(0)==="#")return;e.preventDefault();' +
  'var t=document.getElementById("__link")||document.createElement("div");t.id="__link";t.textContent="Enlace a: "+h+(a.target?"  (target="+a.target+")":"");' +
  't.setAttribute("style","position:fixed;left:8px;bottom:8px;font:12px system-ui,sans-serif;background:#111827;color:#fff;padding:6px 10px;border-radius:6px;z-index:2147483647");document.body.appendChild(t);clearTimeout(window.__lt);window.__lt=setTimeout(function(){t.remove();},2200);});' +
  '})();<\/script>';
function buildDoc(html, css, completo) {
  const style = '<style>' + css + '</style>';
  if (completo || /<html[\s>]|<!doctype/i.test(html)) {
    if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, style + HELPER + '</head>');
    return style + HELPER + html;
  }
  return '<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' + style + HELPER + '</head><body>' + html + '</body></html>';
}

/* ============ editor + vista previa ============ */
function editor(root, ini, completo) {
  root.insertAdjacentHTML('beforeend',
    '<div class="lab">' +
      '<div class="lab-eds">' +
        '<div class="ed-label"><span class="ed-name html">HTML</span><span>' + (completo ? 'documento completo' : 'contenido de &lt;body&gt;') + '</span></div>' +
        '<textarea class="ed" data-k="html" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor de HTML"></textarea>' +
        '<div class="ed-label"><span class="ed-name css">CSS</span><span>hoja de estilo de la página</span></div>' +
        '<textarea class="ed" data-k="css" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor de CSS"></textarea>' +
      '</div>' +
      '<div class="lab-out">' +
        '<div class="out-bar"><b>RESULTADO</b><span class="wlabel"></span>' +
          '<div class="widths" role="group" aria-label="Ancho de la vista previa"><button data-w="" class="on">100 %</button><button data-w="768">768 px</button><button data-w="375">375 px</button></div></div>' +
        '<div class="frame-wrap"><iframe title="Vista previa del resultado"></iframe></div>' +
        '<div class="muted" style="font-size:12px;margin-top:6px">Arrastra la esquina inferior derecha para cambiar el ancho (útil para media queries).</div>' +
      '</div>' +
    '</div>');
  const lab = root.lastElementChild;
  const taH = $('textarea[data-k=html]', lab), taC = $('textarea[data-k=css]', lab);
  const iframe = $('iframe', lab), wrap = $('.frame-wrap', lab), wl = $('.wlabel', lab);
  taH.value = ini.html || ''; taC.value = ini.css || '';
  [taH, taC].forEach(t => { t.style.height = Math.min(420, Math.max(160, (t.value.split('\n').length + 2) * 21.6)) + 'px'; });
  let timer = null, listeners = [];
  function render() {
    return new Promise(res => { iframe.onload = () => res(); iframe.srcdoc = buildDoc(taH.value, taC.value, completo); });
  }
  function onInput() { clearTimeout(timer); timer = setTimeout(() => { render(); listeners.forEach(f => f(get())); }, 280); }
  function get() { return { html: taH.value, css: taC.value }; }
  [taH, taC].forEach(t => {
    t.addEventListener('input', onInput);
    t.addEventListener('keydown', e => {
      if (e.key === 'Tab' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        const a = t.selectionStart, b = t.selectionEnd;
        t.setRangeText('  ', a, b, 'end'); onInput();
      }
      if (e.key === 'Escape') t.blur();
    });
  });
  $$('.widths button', lab).forEach(b => b.addEventListener('click', () => {
    $$('.widths button', lab).forEach(x => x.classList.toggle('on', x === b));
    wrap.style.width = b.dataset.w ? b.dataset.w + 'px' : '';
  }));
  if (window.ResizeObserver) new ResizeObserver(() => { wl.textContent = Math.round(iframe.clientWidth) + ' px'; }).observe(iframe);
  render();
  return {
    get, iframe, render,
    set(h, c) { taH.value = h; taC.value = c; return render(); },
    onChange(f) { listeners.push(f); }
  };
}

/* ============ navegación ============ */
let keyHandler = null, simTimer = null;
function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('/');
  keyHandler = null;
  if (simTimer) { clearInterval(simTimer); simTimer = null; }
  document.body.classList.remove('drawer'); $('#menu').setAttribute('aria-expanded', 'false');
  if (parts[0] === 'm' && BY_ID[parts[1]]) viewModulo(BY_ID[parts[1]], parts[2] || 'aprende');
  else if (parts[0] === 'simulacro') viewSimulacro();
  else if (parts[0] === 'tarjetas') viewTarjetas();
  else if (parts[0] === 'chuleta') viewChuleta();
  else if (parts[0] === 'errores') viewErrores();
  else viewInicio();
  $$('.top-actions a').forEach(a => a.classList.toggle('on', a.dataset.nav === parts[0]));
  renderSidebar(parts[0] === 'm' ? parts[1] : parts[0] || 'inicio');
  updateTop();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.target.closest && e.target.closest('textarea, input, select')) return;
  if (keyHandler) keyHandler(e);
});
$('#menu').addEventListener('click', () => {
  const open = document.body.classList.toggle('drawer');
  $('#menu').setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', e => {
  if (document.body.classList.contains('drawer') && !e.target.closest('.sidebar') && !e.target.closest('#menu')) document.body.classList.remove('drawer');
});

/* tema */
function aplicarTema() { if (S.tema) document.documentElement.setAttribute('data-theme', S.tema); else document.documentElement.removeAttribute('data-theme'); }
$('#tema').addEventListener('click', () => {
  const oscuroAhora = S.tema ? S.tema === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  S.tema = oscuroAhora ? 'light' : 'dark'; save(); aplicarTema();
});
aplicarTema();

function updateTop() {
  const d = MODS.filter(m => dominado(m.id)).length;
  $('#gbar').style.width = pct(d, MODS.length) + '%';
  $('#gtext').textContent = d + ' de ' + MODS.length + ' módulos dominados';
  const n = S.fallos.length, p = $('#nerr');
  p.textContent = n; p.classList.toggle('zero', !n);
}

function estado(m) {
  const s = S.mods[m.id];
  if (dominado(m.id)) return '<span class="st done" title="Dominado">✓</span>';
  if (s && s.mejor != null) return '<span class="st part" title="Mejor test: ' + s.mejor + ' %">' + s.mejor + '</span>';
  if (s && s.visto) return '<span class="st seen" title="Visto"></span>';
  return '<span class="st" title="Pendiente"></span>';
}

function renderSidebar(activo) {
  let h = '<a class="side-link' + (activo === 'inicio' ? ' on' : '') + '" href="#/">⌂ Inicio y plan de estudio</a>';
  [['HTML', 'HTML · estructura y contenido'], ['CSS', 'CSS · estilos y maquetación']].forEach(([area, label]) => {
    const ms = MODS.filter(m => m.area === area);
    if (!ms.length) return;
    h += '<div class="side-group"><div class="side-title ' + area.toLowerCase() + '"><i></i>' + label + '</div><ol>';
    ms.forEach(m => {
      h += '<li><a href="#/m/' + m.id + '"' + (activo === m.id ? ' class="on" aria-current="page"' : '') + '>' + estado(m) +
        '<span>' + esc(m.titulo) + (CLAVE.includes(m.id) ? '<span class="star" title="Tema clave para el examen">★</span>' : '') + '</span>' +
        '<span class="lvl" title="' + esc(m.nivel) + '">' + esc(m.nivel.slice(0, 3)) + '</span></a></li>';
    });
    h += '</ol></div>';
  });
  h += '<div class="side-tools">' +
    '<a class="side-link" href="#/simulacro">⏱ Simulacro de examen</a>' +
    '<a class="side-link" href="#/tarjetas">🃏 Tarjetas de memoria</a>' +
    '<a class="side-link" href="#/chuleta">📄 Chuleta completa</a>' +
    '<a class="side-link" href="#/errores">↺ Repasar errores (' + S.fallos.length + ')</a></div>';
  sidebar.innerHTML = h;
}

/* ============ INICIO ============ */
function viewInicio() {
  const sig = MODS.find(m => !dominado(m.id)) || MODS[0];
  const empezado = Object.keys(S.mods).length > 0;
  const fases = [
    { t: 'HTML: estructura y contenido', f: m => m.area === 'HTML' },
    { t: 'CSS: fundamentos y estilo', f: m => m.area === 'CSS' && m.orden < 18 },
    { t: 'CSS: maquetación moderna', f: m => m.area === 'CSS' && m.orden >= 18 }
  ];
  const totalMin = MODS.reduce((a, m) => a + (MIN[m.nivel] || 5), 0) + 15;
  const ultimo = S.sims.length ? S.sims[S.sims.length - 1] : null;
  let h = '<div class="wrap">' +
    '<section class="hero"><div>' +
      '<p class="eyebrow">Parcial de HTML y CSS · basado en MDN Web Docs</p>' +
      '<h1>Aprende cada concepto, pruébalo en vivo y comprueba que lo dominas.</h1>' +
      '<p class="lead">' + MODS.length + ' módulos de lo básico a lo avanzado, ' + ALLQ.length + ' preguntas tipo examen y un simulacro con nota. Todo en español y fiel a la documentación de MDN.</p>' +
      '<div class="row hero-actions">' +
        (sig ? '<a class="btn primary" href="#/m/' + sig.id + '">' + (empezado ? 'Continuar' : 'Empezar') + ': ' + esc(sig.titulo) + ' →</a>' : '') +
        '<a class="btn" href="#/simulacro">Hacer un simulacro</a></div>' +
    '</div><div class="stats">' +
      '<div class="card stat"><b>' + MODS.filter(m => dominado(m.id)).length + '/' + MODS.length + '</b><span>módulos dominados</span></div>' +
      '<div class="card stat"><b>' + (S.resp ? pct(S.ok, S.resp) + ' %' : '—') + '</b><span>acierto en ' + S.resp + (S.resp === 1 ? ' respuesta' : ' respuestas') + '</span></div>' +
      '<div class="card stat"><b>' + S.fallos.length + '</b><span>errores por repasar</span></div>' +
      '<div class="card stat"><b>' + (ultimo ? ultimo.nota.toFixed(1) : '—') + '</b><span>' + (ultimo ? 'nota del último simulacro' : 'sin simulacros aún') + '</span></div>' +
    '</div></section>' +
    '<div class="steps">' +
      '<div class="card step"><span class="n">1</span><b>Aprende</b><span>Tarjetas cortas: qué es, para qué sirve y la trampa de examen.</span></div>' +
      '<div class="card step"><span class="n">2</span><b>Laboratorio</b><span>Edita HTML y CSS y mira el resultado al instante.</span></div>' +
      '<div class="card step"><span class="n">3</span><b>Reto</b><span>Un ejercicio que se corrige solo al pulsar «Comprobar».</span></div>' +
      '<div class="card step"><span class="n">4</span><b>Test</b><span>10 preguntas con explicación. Con 80 % el módulo queda dominado.</span></div>' +
    '</div>' +
    '<h2 class="section-title">Ruta de estudio <span class="muted" style="font-size:15px;font-weight:500">· unos ' + Math.round(totalMin / 5) * 5 + ' min a ritmo de examen</span></h2><div class="phases">';
  fases.forEach((f, i) => {
    const ms = MODS.filter(f.f); if (!ms.length) return;
    const min = ms.reduce((a, m) => a + (MIN[m.nivel] || 5), 0);
    h += '<div class="card phase"><div class="phase-head"><span class="tag">Fase ' + (i + 1) + '</span><h3>' + f.t + '</h3><span class="muted" style="font-size:14px">~' + min + ' min · ' +
      ms.filter(m => dominado(m.id)).length + '/' + ms.length + ' dominados</span></div><ol>' +
      ms.map(m => '<li><a href="#/m/' + m.id + '">' + estado(m) + '<span>' + esc(m.titulo) + (CLAVE.includes(m.id) ? ' <span class="star">★</span>' : '') + '</span></a></li>').join('') + '</ol></div>';
  });
  h += '<div class="card phase"><div class="phase-head"><span class="tag">Fase 4</span><h3>Simulacro y repaso final</h3><span class="muted" style="font-size:14px">~15 min</span></div>' +
    '<div class="row"><a class="btn sm" href="#/simulacro">⏱ Simulacro</a><a class="btn sm" href="#/errores">↺ Repasar errores</a><a class="btn sm" href="#/tarjetas">🃏 Tarjetas</a><a class="btn sm" href="#/chuleta">📄 Chuleta</a></div></div></div>' +
    '<h2 class="section-title">Cómo aprovechar el tiempo que queda</h2><div class="tips">' +
      '<div class="card tip"><h3>★ Prioriza los temas clave</h3><p>Semántica, formularios, selectores, especificidad, modelo de caja, Flexbox, Grid y responsive son los que más salen en un parcial.</p></div>' +
      '<div class="card tip"><h3>Lee rápido, prueba despacio</h3><p>En «Aprende» fíjate en los recuadros amarillos de «Ojo en el examen». Si el test baja de 80 %, vuelve a esas tarjetas.</p></div>' +
      '<div class="card tip"><h3>Laboratorio y retos</h3><p>Úsalos sobre todo en caja, Flexbox, Grid y posicionamiento: verlo moverse fija el concepto más que leerlo.</p></div>' +
      '<div class="card tip"><h3>Cierra con el simulacro</h3><p>Los fallos se guardan solos en «Errores». Repásalos justo antes de entrar al examen.</p></div>' +
      '<div class="card tip"><h3>Atajos de teclado</h3><p><kbd>1</kbd>–<kbd>4</kbd> responder · <kbd>Enter</kbd> siguiente · <kbd>←</kbd> <kbd>→</kbd> moverse en el simulacro · <kbd>Espacio</kbd> voltear tarjeta.</p></div>' +
    '</div>' +
    '<p class="muted no-print" style="margin-top:36px;font-size:13px">El progreso se guarda en este navegador. <button class="btn sm ghost" id="reset">Borrar progreso</button></p>' +
  '</div>';
  app.innerHTML = h;
  $('#reset').addEventListener('click', () => {
    if (!confirm('¿Borrar todo el progreso, errores y simulacros?')) return;
    const tema = S.tema; S = base(); S.tema = tema; save(); route();
  });
}

/* ============ MÓDULO ============ */
const LAB = {}, RETO = {};
function viewModulo(m, tab) {
  const s = st(m.id); s.visto = true; save();
  const i = MODS.indexOf(m), prev = MODS[i - 1], next = MODS[i + 1];
  const tabs = [['aprende', '1 · Aprende'], ['lab', '2 · Laboratorio']];
  if (m.reto) tabs.push(['reto', '3 · Reto' + (s.reto ? ' <span class="ok">✓</span>' : '')]);
  tabs.push(['test', (m.reto ? '4' : '3') + ' · Test' + (s.mejor != null ? ' <span class="' + (s.mejor >= 80 ? 'ok' : '') + '">' + s.mejor + ' %</span>' : '')]);
  if (!tabs.some(t => t[0] === tab)) tab = 'aprende';
  app.innerHTML = '<div class="wrap">' +
    '<header class="mod-head"><div class="row"><span class="tag ' + m.area.toLowerCase() + '">' + m.area + '</span><span class="tag">' + esc(m.nivel) + '</span>' +
      (CLAVE.includes(m.id) ? '<span class="tag" style="color:#b07d00">★ Clave para el examen</span>' : '') +
      '<span class="muted" style="font-size:13px">Módulo ' + (i + 1) + ' de ' + MODS.length + '</span></div>' +
      '<h1>' + esc(m.titulo) + '</h1><p class="lead">' + md(m.resumen) + '</p>' +
      (m.mdn ? '<a class="mdn-link" href="' + esc(m.mdn) + '" target="_blank" rel="noopener noreferrer">Leer en MDN Web Docs ↗</a>' : '') +
    '</header>' +
    '<nav class="tabs" aria-label="Pasos del módulo">' + tabs.map(t => '<a href="#/m/' + m.id + '/' + t[0] + '"' + (t[0] === tab ? ' class="on" aria-current="page"' : '') + '>' + t[1] + '</a>').join('') + '</nav>' +
    '<section id="tabbody"></section>' +
    '<nav class="mod-nav no-print" aria-label="Módulos">' +
      (prev ? '<a class="btn ghost" href="#/m/' + prev.id + '">← ' + esc(prev.titulo) + '</a>' : '<span></span>') +
      (next ? '<a class="btn ghost" href="#/m/' + next.id + '">' + esc(next.titulo) + ' →</a>' : '<a class="btn ghost" href="#/simulacro">Ir al simulacro →</a>') +
    '</nav></div>';
  const body = $('#tabbody');
  if (tab === 'aprende') tabAprende(m, body);
  else if (tab === 'lab') tabLab(m, body);
  else if (tab === 'reto') tabReto(m, body);
  else tabTest(m, body);
}

function tabAprende(m, body) {
  let h = (m.conceptos || []).map((c, i) =>
    '<article class="card concept"><div class="concept-num">' + (i + 1) + '</div><div>' +
      '<h2>' + md(c.titulo) + '</h2><p>' + md(c.texto) + '</p>' +
      (c.puntos && c.puntos.length ? '<ul class="keys">' + c.puntos.map(p => '<li>' + md(p) + '</li>').join('') + '</ul>' : '') +
      (c.codigo ? codeBlock(c.codigo, c.lenguaje) + '<button class="btn sm ghost try" data-i="' + i + '">▶ Probar este código en el laboratorio</button>' : '') +
      (c.ojo ? '<div class="callout ojo"><strong>Ojo en el examen:</strong> ' + md(c.ojo) + '</div>' : '') +
    '</div></article>').join('');
  if (m.chuleta && m.chuleta.length) {
    h += '<section class="card mini-chuleta"><h2>Resumen del módulo</h2><dl class="pairs">' +
      m.chuleta.map(p => '<dt>' + esc(p[0]) + '</dt><dd>' + md(p[1]) + '</dd>').join('') + '</dl></section>';
  }
  h += '<div class="next-cta"><a class="btn primary" href="#/m/' + m.id + '/lab">Siguiente: laboratorio →</a></div>';
  body.innerHTML = h;
  $$('.try', body).forEach(b => b.addEventListener('click', () => {
    const c = m.conceptos[+b.dataset.i];
    LAB[m.id] = c.lenguaje === 'css'
      ? { html: (m.ejemplo && m.ejemplo.html) || '', css: c.codigo, nota: 'Cargado el CSS de la tarjeta «' + c.titulo + '» sobre el HTML del ejemplo.' }
      : { html: c.codigo, css: '', nota: 'Cargado el HTML de la tarjeta «' + c.titulo + '».' };
    location.hash = '#/m/' + m.id + '/lab';
  }));
}

function tabLab(m, body) {
  const ej = m.ejemplo || { html: '', css: '' };
  const ini = LAB[m.id] || { html: ej.html, css: ej.css };
  const completo = !!ej.completo || /<html[\s>]|<!doctype/i.test(ini.html);
  body.innerHTML = '<div class="card consigna"><span class="ico">🧪</span><div>' +
    (ini.nota ? '<div class="muted" style="font-size:13px;margin-bottom:4px">' + esc(ini.nota) + '</div>' : '') +
    md(ej.consigna || 'Modifica el código y observa el resultado en vivo.') + '</div></div>';
  const ed = editor(body, ini, completo);
  ed.onChange(v => { LAB[m.id] = v; });
  body.insertAdjacentHTML('beforeend', '<div class="row lab-actions"><button class="btn sm" id="labreset">↺ Restaurar el ejemplo</button>' +
    (m.reto ? '<a class="btn primary sm" href="#/m/' + m.id + '/reto" style="margin-left:auto">Siguiente: reto →</a>' : '<a class="btn primary sm" href="#/m/' + m.id + '/test" style="margin-left:auto">Siguiente: test →</a>') + '</div>');
  $('#labreset').addEventListener('click', () => { delete LAB[m.id]; ed.set(ej.html, ej.css); });
}

function tabReto(m, body) {
  const r = m.reto, s = st(m.id);
  const ini = RETO[m.id] || { html: r.html, css: r.css };
  body.innerHTML = '<div class="card reto-head"><h2>🎯 Reto' + (s.reto ? ' <span class="tag" style="background:var(--ok-soft);color:var(--ok)">Superado</span>' : '') + '</h2><p>' + md(r.enunciado) + '</p></div>';
  const ed = editor(body, ini, !!r.completo);
  ed.onChange(v => { RETO[m.id] = v; });
  body.insertAdjacentHTML('beforeend',
    '<div class="row lab-actions"><button class="btn primary" id="chk">Comprobar</button>' +
    (r.pista ? '<button class="btn" id="pista">💡 Pista</button>' : '') +
    '<button class="btn" id="sol">Ver solución</button><button class="btn ghost" id="rreset">↺ Reiniciar</button>' +
    '<a class="btn ghost" href="#/m/' + m.id + '/test" style="margin-left:auto">Ir al test →</a></div><div id="rres" aria-live="polite"></div>');
  const out = $('#rres');
  const msg = (cls, html) => { out.innerHTML = '<div class="result ' + cls + '">' + html + '</div>'; };
  $('#chk').addEventListener('click', async () => {
    await ed.render();
    let res;
    try { res = r.validar(ed.iframe.contentDocument, ed.iframe.contentWindow); }
    catch (e) { res = { ok: false, msg: 'No se pudo comprobar: ' + e.message }; }
    if (!res || typeof res !== 'object') res = { ok: false, msg: 'No se pudo comprobar.' };
    if (res.ok) { s.reto = true; save(); renderSidebar(m.id); msg('ok', '<strong>✓ ' + md(res.msg || '¡Reto superado!') + '</strong>'); }
    else msg('bad', '<strong>Aún no.</strong> ' + md(res.msg || 'Revisa el enunciado.'));
  });
  if (r.pista) $('#pista').addEventListener('click', () => msg('info', '<strong>Pista:</strong> ' + md(r.pista)));
  $('#sol').addEventListener('click', () => {
    if (!confirm('¿Ver la solución? Intenta antes resolverlo tú: se aprende mucho más.')) return;
    ed.set(r.solucion.html, r.solucion.css); RETO[m.id] = { html: r.solucion.html, css: r.solucion.css };
    msg('info', 'Solución cargada en los editores. Léela con calma y pulsa «Comprobar».');
  });
  $('#rreset').addEventListener('click', () => { delete RETO[m.id]; ed.set(r.html, r.css); out.innerHTML = ''; });
}

function tabTest(m, body) {
  body.innerHTML = '<div class="quiz" id="quiz"></div>';
  quiz($('#quiz'), m.preguntas || [], {
    contexto: false,
    fin(ok, total, fallos, rehacer) {
      const p = pct(ok, total), s = st(m.id);
      const nuevoMejor = total === (m.preguntas || []).length && (s.mejor == null || p > s.mejor);
      if (total === (m.preguntas || []).length) { s.mejor = Math.max(s.mejor == null ? 0 : s.mejor, p); save(); }
      renderSidebar(m.id); updateTop();
      const next = MODS[MODS.indexOf(m) + 1];
      return {
        msg: p >= 80 ? '¡Módulo dominado!' : p >= 60 ? 'Casi. Repasa los fallos y vuelve a intentarlo.' : 'Vuelve a «Aprende», mira los recuadros de «Ojo» y repite.',
        extra: nuevoMejor ? 'Nuevo mejor resultado en este módulo.' : '',
        botones: (fallos.length ? '<button class="btn" data-act="fallos">Repetir solo los fallos (' + fallos.length + ')</button>' : '') +
          '<button class="btn" data-act="todo">Repetir el test</button>' +
          (next ? '<a class="btn primary" href="#/m/' + next.id + '">Siguiente módulo →</a>' : '<a class="btn primary" href="#/simulacro">Hacer el simulacro →</a>'),
        acciones: { fallos: () => rehacer(fallos), todo: () => rehacer(m.preguntas) }
      };
    }
  });
}

/* ============ motor de preguntas (con corrección inmediata) ============ */
function registrar(q, ok) {
  S.resp++; if (ok) S.ok++;
  const k = S.fallos.indexOf(q._id);
  if (!ok && k < 0) S.fallos.push(q._id);
  if (ok && k >= 0) S.fallos.splice(k, 1);
  save(); updateTop();
}
function cuerpoPregunta(q) {
  let h = '<h2 class="q-text">' + md(q.enunciado) + '</h2>' + (q.codigo ? codeBlock(q.codigo, q.lenguaje) : '');
  if (q.tipo === 'opcion') h += '<div class="opts">' + q.opciones.map((o, k) => '<button class="opt" data-k="' + k + '"><kbd>' + (k + 1) + '</kbd><span>' + md(o) + '</span></button>').join('') + '</div>';
  else h += '<form class="fill" autocomplete="off"><input type="text" spellcheck="false" autocapitalize="off" aria-label="Tu respuesta" placeholder="Escribe tu respuesta"><button class="btn primary" type="submit">Comprobar</button></form>';
  return h;
}
function feedback(q, ok) {
  let h = '<div class="fb ' + (ok ? 'ok' : 'bad') + '" role="status"><div class="fb-title">' + (ok ? '✓ ¡Correcto!' : '✗ Incorrecto') + '</div>';
  if (!ok && q.tipo === 'completar') h += '<div>Respuesta esperada: <code>' + esc(q.respuestas[0]) + '</code></div>';
  if (!ok && q.tipo === 'opcion') h += '<div>La correcta es: <strong>' + md(q.opciones[q.correcta]) + '</strong></div>';
  return h + '<p>' + md(q.explicacion) + '</p></div>';
}
function quiz(root, preguntas, cfg) {
  let qs = preguntas.slice(), i = 0, ok = 0, fallos = [];
  function rehacer(lista) { qs = shuffle(lista.slice()); i = 0; ok = 0; fallos = []; show(); }
  function show() {
    const q = qs[i];
    let done = false;
    root.innerHTML = '<div class="card q-card">' +
      '<div class="q-meta"><span>Pregunta ' + (i + 1) + ' de ' + qs.length + '</span><span>' + (cfg.contexto ? esc(q._mod.titulo) : ok + ' aciertos') + '</span></div>' +
      '<div class="q-bar"><span style="width:' + pct(i, qs.length) + '%"></span></div>' +
      cuerpoPregunta(q) + '<div class="fbw" aria-live="polite"></div>' +
      '<div class="q-actions"><button class="btn primary" id="qnext" hidden>' + (i + 1 < qs.length ? 'Siguiente' : 'Ver resultado') + ' <kbd style="background:transparent;color:inherit;border-color:currentColor">Enter</kbd></button></div></div>';
    const nextBtn = $('#qnext', root);
    function resolver(correcto) {
      done = true; registrar(q, correcto);
      if (correcto) ok++; else fallos.push(q);
      if (cfg.alResponder) cfg.alResponder(q, correcto);
      $('.fbw', root).innerHTML = feedback(q, correcto);
      nextBtn.hidden = false; nextBtn.focus();
    }
    if (q.tipo === 'opcion') {
      $$('.opt', root).forEach(b => b.addEventListener('click', () => {
        if (done) return;
        const k = +b.dataset.k, correcto = k === q.correcta;
        $$('.opt', root).forEach(x => { x.disabled = true; if (+x.dataset.k === q.correcta) x.classList.add('right'); });
        if (!correcto) b.classList.add('wrong');
        resolver(correcto);
      }));
      keyHandler = e => {
        const n = parseInt(e.key, 10);
        if (!done && n >= 1 && n <= q.opciones.length) { e.preventDefault(); $$('.opt', root)[n - 1].click(); }
      };
    } else {
      const form = $('.fill', root), inp = $('input', form);
      inp.focus();
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (done) return;
        if (!inp.value.trim()) { inp.focus(); return; }
        const correcto = acierta(q, inp.value);
        inp.classList.add(correcto ? 'right' : 'wrong'); inp.readOnly = true; $('button', form).disabled = true;
        resolver(correcto);
      });
      keyHandler = null;
    }
    nextBtn.addEventListener('click', () => { i++; if (i < qs.length) show(); else fin(); });
  }
  function fin() {
    keyHandler = null;
    const r = cfg.fin(ok, qs.length, fallos, rehacer) || {};
    const p = pct(ok, qs.length);
    root.innerHTML = '<div class="card score"><div class="big" style="color:' + (p >= 80 ? 'var(--ok)' : p >= 60 ? 'var(--warn)' : 'var(--bad)') + '">' + p + ' %</div>' +
      '<div class="muted">' + ok + ' de ' + qs.length + ' correctas</div><div class="msg">' + esc(r.msg || '') + '</div>' +
      (r.extra ? '<div class="muted" style="margin-top:4px">' + esc(r.extra) + '</div>' : '') +
      '<div class="row" style="justify-content:center;margin-top:20px">' + (r.botones || '') + '</div></div>' +
      (fallos.length ? '<h3 class="section-title" style="font-size:18px">Repasa lo que fallaste</h3><div class="review">' + fallos.map(revisión).join('') + '</div>' : '');
    $$('[data-act]', root).forEach(b => b.addEventListener('click', () => r.acciones[b.dataset.act]()));
  }
  if (!qs.length) { root.innerHTML = '<div class="card empty">No hay preguntas aquí todavía.</div>'; return; }
  show();
}
function revisión(q, tuya) {
  const correcta = q.tipo === 'opcion' ? md(q.opciones[q.correcta]) : '<code>' + esc(q.respuestas[0]) + '</code>';
  let tu = '';
  if (tuya !== undefined) {
    if (tuya == null || tuya === '') tu = '<p class="muted">Sin responder.</p>';
    else tu = '<p>Tu respuesta: ' + (q.tipo === 'opcion' ? md(q.opciones[tuya]) : '<code>' + esc(tuya) + '</code>') + '</p>';
  }
  const bien = tuya !== undefined && tuya != null && tuya !== '' && (q.tipo === 'opcion' ? tuya === q.correcta : acierta(q, tuya));
  return '<div class="card rev' + (bien ? ' ok' : '') + '"><div class="mod">' + esc(q._mod.titulo) + '</div><div class="q">' + md(q.enunciado) + '</div>' +
    (q.codigo ? codeBlock(q.codigo, q.lenguaje) : '') + tu + '<p>Correcta: ' + correcta + '</p><p class="muted">' + md(q.explicacion) + '</p></div>';
}

/* ============ ERRORES ============ */
function viewErrores() {
  const qs = S.fallos.map(id => QBY[id]).filter(Boolean);
  app.innerHTML = '<div class="wrap"><p class="eyebrow">Repaso inteligente</p><h1 style="font-size:32px;letter-spacing:-.02em">Repasar errores</h1>' +
    '<p class="lead">Aquí se acumulan las preguntas que fallaste en tests y simulacros. Al acertarlas, salen de la lista.</p><div id="errq" style="margin-top:24px"></div></div>';
  const root = $('#errq');
  if (!qs.length) { root.innerHTML = '<div class="card empty"><b>No tienes errores pendientes.</b><br>Haz el test de algún módulo o un simulacro y vuelve aquí.</div>'; return; }
  const porMod = {};
  qs.forEach(q => { porMod[q._mod.titulo] = (porMod[q._mod.titulo] || 0) + 1; });
  root.innerHTML = '<div class="card" style="padding:18px 22px"><b>' + qs.length + ' pregunta(s) pendientes</b> en: ' +
    Object.entries(porMod).map(([t, n]) => esc(t) + ' (' + n + ')').join(' · ') +
    '<div class="row" style="margin-top:14px"><button class="btn primary" id="errgo">Empezar repaso</button></div></div>';
  $('#errgo').addEventListener('click', () => {
    root.innerHTML = '<div class="quiz"></div>';
    quiz($('.quiz', root), shuffle(qs.slice()), {
      contexto: true,
      fin(ok, total, fallos, rehacer) {
        renderSidebar('errores');
        return {
          msg: S.fallos.length ? 'Te quedan ' + S.fallos.length + ' por dominar.' : '¡Lista de errores vacía!',
          botones: (S.fallos.length ? '<button class="btn primary" data-act="otra">Repasar los que quedan</button>' : '') + '<a class="btn" href="#/simulacro">Simulacro</a>',
          acciones: { otra: () => rehacer(S.fallos.map(id => QBY[id]).filter(Boolean)) }
        };
      }
    });
  });
}

/* ============ SIMULACRO ============ */
let SIM = null;
function viewSimulacro() {
  if (SIM && !SIM.terminado) return simPregunta();
  if (SIM && SIM.terminado) return simResultado();
  simConfig();
}
function simConfig() {
  const nH = ALLQ.filter(q => q._mod.area === 'HTML').length, nC = ALLQ.length - nH;
  const hist = S.sims.slice(-5).reverse();
  app.innerHTML = '<div class="wrap"><p class="eyebrow">Modo examen</p><h1 style="font-size:32px;letter-spacing:-.02em">Simulacro de parcial</h1>' +
    '<p class="lead">Preguntas mezcladas de todos los módulos, sin ver la respuesta hasta el final, con cronómetro y nota sobre 5,0.</p>' +
    '<form class="card sim-config" id="simf" style="margin-top:24px">' +
      '<fieldset><legend>Número de preguntas</legend>' +
        [20, 40, 60].map((n, k) => '<label class="choice"><input type="radio" name="n" value="' + n + '"' + (k === 0 ? ' checked' : '') + '> ' + n + '</label>').join('') +
        '<label class="choice"><input type="radio" name="n" value="0"> Todas (' + ALLQ.length + ')</label></fieldset>' +
      '<fieldset><legend>Temas</legend>' +
        '<label class="choice"><input type="radio" name="a" value="" checked> HTML y CSS</label>' +
        '<label class="choice"><input type="radio" name="a" value="HTML"> Solo HTML (' + nH + ')</label>' +
        '<label class="choice"><input type="radio" name="a" value="CSS"> Solo CSS (' + nC + ')</label></fieldset>' +
      '<fieldset><legend>Tiempo</legend><label class="choice"><input type="checkbox" name="t" checked> 1 minuto por pregunta</label></fieldset>' +
      '<div class="row" style="margin-top:20px"><button class="btn primary" type="submit">Empezar simulacro</button></div>' +
    '</form>' +
    (hist.length ? '<h2 class="section-title" style="font-size:18px">Últimos simulacros</h2><div class="card breakdown">' + hist.map(x =>
      '<div class="bd-row"><span>' + esc(x.fecha) + ' · ' + x.n + ' preguntas</span><div class="bd-bar"><span style="width:' + x.pct + '%;background:' + (x.nota >= 3 ? 'var(--ok)' : 'var(--bad)') + '"></span></div><b>' + x.nota.toFixed(1) + '</b></div>').join('') + '</div>' : '') +
    '</div>';
  $('#simf').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const area = f.get('a'), tiempo = f.get('t') === 'on';
    let n = parseInt(f.get('n'), 10);
    const mods = MODS.filter(m => !area || m.area === area);
    const pools = mods.map(m => shuffle((m.preguntas || []).slice()));
    const total = pools.reduce((a, p) => a + p.length, 0);
    if (!n || n > total) n = total;
    const qs = [];
    while (qs.length < n) { let added = false; for (const p of shuffle(pools.slice())) { if (qs.length >= n) break; if (p.length) { qs.push(p.pop()); added = true; } } if (!added) break; }
    SIM = { qs: shuffle(qs), resp: new Array(qs.length).fill(null), i: 0, fin: tiempo ? Date.now() + qs.length * 60000 : null, inicio: Date.now(), terminado: false };
    simPregunta();
  });
}
function simPregunta() {
  const q = SIM.qs[SIM.i], n = SIM.qs.length;
  const resp = SIM.resp[SIM.i];
  const contestadas = SIM.resp.filter(r => r != null && r !== '').length;
  app.innerHTML = '<div class="wrap">' +
    '<div class="sim-top"><h1 style="font-size:22px">Simulacro</h1>' +
      (SIM.fin ? '<span class="timer" id="timer" aria-label="Tiempo restante">--:--</span>' : '') +
      '<span class="muted">' + contestadas + ' de ' + n + ' respondidas</span>' +
      '<button class="btn sm" id="simend" style="margin-left:auto">Terminar y corregir</button></div>' +
    '<div class="sim-grid"><div class="card q-card">' +
      '<div class="q-meta"><span>Pregunta ' + (SIM.i + 1) + ' de ' + n + '</span><span class="tag ' + q._mod.area.toLowerCase() + '">' + q._mod.area + '</span></div>' +
      '<div class="q-bar"><span style="width:' + pct(contestadas, n) + '%"></span></div>' + cuerpoPregunta(q) +
      '<div class="q-actions"><button class="btn" id="simprev"' + (SIM.i === 0 ? ' disabled' : '') + '>← Anterior</button>' +
      '<button class="btn primary" id="simnext">' + (SIM.i + 1 < n ? 'Siguiente →' : 'Revisar y terminar') + '</button></div></div>' +
      '<aside class="card palette"><h3>Ir a la pregunta</h3><div class="nums">' +
        SIM.resp.map((r, k) => '<button data-k="' + k + '" class="' + (r != null && r !== '' ? 'ans' : '') + (k === SIM.i ? ' cur' : '') + '" aria-label="Pregunta ' + (k + 1) + '">' + (k + 1) + '</button>').join('') +
      '</div></aside></div></div>';
  if (q.tipo === 'opcion') {
    $$('.opt').forEach(b => {
      if (resp === +b.dataset.k) b.classList.add('sel');
      b.addEventListener('click', () => { SIM.resp[SIM.i] = +b.dataset.k; $$('.opt').forEach(x => x.classList.toggle('sel', x === b)); marcarPaleta(); });
    });
  } else {
    const form = $('.fill'), inp = $('input', form);
    $('button', form).textContent = 'Guardar';
    inp.value = resp || '';
    inp.addEventListener('input', () => { SIM.resp[SIM.i] = inp.value.trim() ? inp.value : null; marcarPaleta(); });
    form.addEventListener('submit', e => { e.preventDefault(); ir(SIM.i + 1); });
    inp.focus();
  }
  function marcarPaleta() { $$('.palette button').forEach((b, k) => b.classList.toggle('ans', SIM.resp[k] != null && SIM.resp[k] !== '')); }
  function ir(k) { if (k >= 0 && k < n) { SIM.i = k; simPregunta(); window.scrollTo(0, 0); } else if (k >= n) terminarSim(); }
  $('#simprev').addEventListener('click', () => ir(SIM.i - 1));
  $('#simnext').addEventListener('click', () => ir(SIM.i + 1));
  $('#simend').addEventListener('click', terminarSim);
  $$('.palette button').forEach(b => b.addEventListener('click', () => ir(+b.dataset.k)));
  keyHandler = e => {
    const d = parseInt(e.key, 10);
    if (q.tipo === 'opcion' && d >= 1 && d <= q.opciones.length) { e.preventDefault(); $$('.opt')[d - 1].click(); }
    else if (e.key === 'ArrowRight' || (e.key === 'Enter' && !e.target.closest('button,a'))) { e.preventDefault(); ir(SIM.i + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); ir(SIM.i - 1); }
  };
  if (SIM.fin) {
    const tick = () => {
      const left = SIM.fin - Date.now(), el = $('#timer');
      if (!el) return;
      if (left <= 0) { clearInterval(simTimer); simTimer = null; alert('Se acabó el tiempo. Vamos a corregir.'); terminarSim(true); return; }
      const s = Math.ceil(left / 1000);
      el.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
      el.classList.toggle('low', s <= 60);
    };
    if (simTimer) clearInterval(simTimer);
    tick(); simTimer = setInterval(tick, 1000);
  }
}
function terminarSim(forzado) {
  if (!SIM || SIM.terminado) return;
  const sin = SIM.resp.filter(r => r == null || r === '').length;
  if (!forzado && sin && !confirm('Te quedan ' + sin + ' pregunta(s) sin responder (cuentan como fallo). ¿Terminar y corregir?')) return;
  if (simTimer) { clearInterval(simTimer); simTimer = null; }
  let ok = 0;
  SIM.ok = SIM.qs.map((q, k) => {
    const r = SIM.resp[k];
    const bien = r != null && r !== '' && (q.tipo === 'opcion' ? r === q.correcta : acierta(q, r));
    if (bien) ok++;
    registrar(q, bien);
    return bien;
  });
  const p = pct(ok, SIM.qs.length), nota = Math.round(ok / SIM.qs.length * 50) / 10;
  SIM.res = { ok, p, nota, min: Math.max(1, Math.round((Date.now() - SIM.inicio) / 60000)) };
  SIM.terminado = true;
  const d = new Date();
  S.sims.push({ fecha: d.toLocaleDateString('es') + ' ' + d.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }), n: SIM.qs.length, pct: p, nota });
  S.sims = S.sims.slice(-20); save();
  if (location.hash !== '#/simulacro') location.hash = '#/simulacro'; else route();
}
function simResultado() {
  const R = SIM.res, n = SIM.qs.length;
  const porMod = {};
  SIM.qs.forEach((q, k) => { const t = porMod[q._mod.id] || (porMod[q._mod.id] = { m: q._mod, ok: 0, n: 0 }); t.n++; if (SIM.ok[k]) t.ok++; });
  const filas = Object.values(porMod).sort((a, b) => a.ok / a.n - b.ok / b.n);
  const areas = ['HTML', 'CSS'].map(a => { const xs = SIM.qs.map((q, k) => [q, SIM.ok[k]]).filter(x => x[0]._mod.area === a); return [a, xs.filter(x => x[1]).length, xs.length]; }).filter(x => x[2]);
  const color = v => v >= .8 ? 'var(--ok)' : v >= .6 ? 'var(--warn)' : 'var(--bad)';
  const debiles = filas.filter(f => f.ok / f.n < .6).slice(0, 4);
  app.innerHTML = '<div class="wrap"><p class="eyebrow">Resultado del simulacro</p>' +
    '<div class="card grade"><div class="nota" style="color:' + (R.nota >= 3 ? 'var(--ok)' : 'var(--bad)') + '">' + R.nota.toFixed(1) + '<small> / 5,0</small></div>' +
      '<div><div style="font-size:18px;font-weight:700">' + R.ok + ' de ' + n + ' correctas (' + R.p + ' %) en ' + R.min + ' min</div>' +
      '<span class="verdict ' + (R.nota >= 3 ? 'pass' : 'fail') + '">' + (R.nota >= 4 ? 'Muy bien: vas preparado' : R.nota >= 3 ? 'Aprobado' : 'Todavía no: repasa los temas débiles') + '</span>' +
      (debiles.length ? '<p class="muted" style="margin:10px 0 0">Repasa primero: ' + debiles.map(f => '<a href="#/m/' + f.m.id + '">' + esc(f.m.titulo) + '</a>').join(', ') + '.</p>' : '') +
      '<div class="row" style="margin-top:14px"><button class="btn primary" id="simnew">Nuevo simulacro</button><a class="btn" href="#/errores">Repasar errores (' + S.fallos.length + ')</a></div></div></div>' +
    '<h2 class="section-title" style="font-size:18px">Por área y por módulo</h2><div class="card breakdown">' +
      areas.map(([a, o, t]) => '<div class="bd-row"><b style="text-align:left">' + a + '</b><div class="bd-bar"><span style="width:' + pct(o, t) + '%;background:' + color(o / t) + '"></span></div><b>' + o + '/' + t + '</b></div>').join('') +
      '<div style="height:6px"></div>' +
      filas.map(f => '<div class="bd-row"><a href="#/m/' + f.m.id + '">' + esc(f.m.titulo) + '</a><div class="bd-bar"><span style="width:' + pct(f.ok, f.n) + '%;background:' + color(f.ok / f.n) + '"></span></div><b>' + f.ok + '/' + f.n + '</b></div>').join('') +
    '</div>' +
    '<div class="row" style="margin:36px 0 0;justify-content:space-between"><h2 style="font-size:18px">Revisión pregunta a pregunta</h2>' +
      '<div class="widths"><button data-f="mal" class="on">Solo falladas</button><button data-f="todas">Todas</button></div></div>' +
    '<div class="review" id="rev"></div></div>';
  const pintar = f => {
    const items = SIM.qs.map((q, k) => [q, k]).filter(([q, k]) => f === 'todas' || !SIM.ok[k]);
    $('#rev').innerHTML = items.length ? items.map(([q, k]) => revisión(q, SIM.resp[k])).join('') : '<div class="card empty">¡Ninguna fallada! 🎉</div>';
  };
  pintar('mal');
  $$('.widths button').forEach(b => b.addEventListener('click', () => { $$('.widths button').forEach(x => x.classList.toggle('on', x === b)); pintar(b.dataset.f); }));
  $('#simnew').addEventListener('click', () => { SIM = null; simConfig(); });
}

/* ============ TARJETAS ============ */
let FLASH = null;
function viewTarjetas() {
  const opts = '<option value="">Todos los módulos</option><option value="area:HTML">Solo HTML</option><option value="area:CSS">Solo CSS</option>' +
    '<option value="clave">★ Temas clave</option>' + MODS.map(m => '<option value="' + m.id + '">' + esc(m.titulo) + '</option>').join('');
  app.innerHTML = '<div class="wrap flash-wrap"><p class="eyebrow">Memoria activa</p><h1 style="font-size:32px;letter-spacing:-.02em">Tarjetas de memoria</h1>' +
    '<p class="lead" style="font-size:16px">Intenta recordar el significado antes de voltear. Lo que no sabes vuelve a salir.</p>' +
    '<div class="row" style="margin-top:18px"><select id="fsel" class="search" style="flex:1;min-width:200px;padding:10px 12px">' + opts + '</select>' +
    '<button class="btn primary" id="fgo">Barajar</button></div><div id="fzone"></div></div>';
  const sel = $('#fsel');
  if (FLASH) sel.value = FLASH.filtro;
  const nuevo = () => {
    const v = sel.value;
    const ms = MODS.filter(m => !v || (v.startsWith('area:') ? m.area === v.slice(5) : v === 'clave' ? CLAVE.includes(m.id) : m.id === v));
    const deck = shuffle(ms.flatMap(m => (m.chuleta || []).map(p => ({ t: p[0], d: p[1], m }))));
    FLASH = { filtro: v, deck, total: deck.length, sabidas: 0 };
    pintar();
  };
  function pintar() {
    const z = $('#fzone');
    if (!FLASH.deck.length) {
      keyHandler = null;
      z.innerHTML = '<div class="card empty" style="margin-top:16px"><b>¡Mazo terminado!</b> ' + FLASH.sabidas + ' tarjetas repasadas.<div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" id="fagain">Otra vez</button></div></div>';
      $('#fagain').addEventListener('click', nuevo); return;
    }
    const c = FLASH.deck[0];
    z.innerHTML = '<div class="muted" style="margin-top:16px;font-size:14px">Quedan ' + FLASH.deck.length + ' · sabidas ' + FLASH.sabidas + ' de ' + FLASH.total + '</div>' +
      '<div class="flash" id="card" role="button" tabindex="0" aria-label="Voltear tarjeta"><div class="flash-inner">' +
        '<div class="face front"><span class="from">' + esc(c.m.titulo) + '</span><div class="term' + (tipoCodigo(c.t) ? ' mono' : '') + '">' + esc(c.t) + '</div><span class="hint">Clic o Espacio para voltear</span></div>' +
        '<div class="face back"><span class="from">' + esc(c.t) + '</span><div class="def">' + md(c.d) + '</div></div>' +
      '</div></div>' +
      '<div class="flash-actions"><button class="btn" id="fno" disabled>Otra vez <kbd>1</kbd></button><button class="btn ok" id="fyes" disabled>La sé <kbd style="color:inherit;background:transparent">2</kbd></button></div>';
    const card = $('#card');
    const voltear = () => { card.classList.toggle('flipped'); $('#fno').disabled = $('#fyes').disabled = false; };
    card.addEventListener('click', voltear);
    card.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); voltear(); } });
    $('#fno').addEventListener('click', () => { const x = FLASH.deck.shift(); FLASH.deck.splice(Math.min(3, FLASH.deck.length), 0, x); pintar(); });
    $('#fyes').addEventListener('click', () => { FLASH.deck.shift(); FLASH.sabidas++; pintar(); });
    keyHandler = e => {
      if (e.key === ' ') { e.preventDefault(); voltear(); }
      else if (e.key === '1' && !$('#fno').disabled) $('#fno').click();
      else if (e.key === '2' && !$('#fyes').disabled) $('#fyes').click();
    };
  }
  $('#fgo').addEventListener('click', nuevo);
  sel.addEventListener('change', nuevo);
  if (FLASH && FLASH.deck.length) pintar(); else nuevo();
}

/* ============ CHULETA ============ */
function viewChuleta() {
  app.innerHTML = '<div class="wrap"><p class="eyebrow">Referencia rápida</p><div class="row" style="justify-content:space-between"><h1 style="font-size:32px;letter-spacing:-.02em">Chuleta completa</h1>' +
    '<button class="btn sm no-print" onclick="window.print()">🖨 Imprimir</button></div>' +
    '<p class="lead" style="font-size:16px">Todos los términos clave de los ' + MODS.length + ' módulos. Escribe para filtrar (etiqueta, propiedad o palabra).</p>' +
    '<input class="search no-print" id="q" type="search" placeholder="Buscar: flex, alt, especificidad, rem…" style="margin-top:18px" aria-label="Buscar en la chuleta">' +
    '<div id="chl"></div></div>';
  const pintar = txt => {
    const t = txt.trim().toLowerCase();
    const marcar = s => { const e = esc(s); if (!t) return e; const tt = esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); return e.replace(new RegExp('(' + tt + ')', 'gi'), '<mark>$1</mark>'); };
    let h = '';
    MODS.forEach(m => {
      const ps = (m.chuleta || []).filter(p => !t || (p[0] + ' ' + p[1]).toLowerCase().includes(t));
      if (!ps.length) return;
      h += '<section class="card ch-group"><h2><span class="tag ' + m.area.toLowerCase() + '">' + m.area + '</span><a href="#/m/' + m.id + '" style="color:inherit;text-decoration:none">' + esc(m.titulo) + '</a></h2><dl class="pairs">' +
        ps.map(p => '<dt>' + marcar(p[0]) + '</dt><dd>' + (t ? marcar(p[1].replace(/`/g, '')) : md(p[1])) + '</dd>').join('') + '</dl></section>';
    });
    $('#chl').innerHTML = h || '<div class="card empty" style="margin-top:14px">Sin resultados para «' + esc(txt) + '».</div>';
  };
  let tm; $('#q').addEventListener('input', e => { clearTimeout(tm); tm = setTimeout(() => pintar(e.target.value), 120); });
  pintar('');
}

/* ============ arranque ============ */
if (!MODS.length) {
  app.innerHTML = '<div class="card empty">No se encontró el contenido. Comprueba que la carpeta <code>contenido/</code> está junto a este archivo.</div>';
} else route();
})();
