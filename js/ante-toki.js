// o awen e sona lon poki ilo pi jan lukin
function tawaPoki(toki) { document.cookie = `t=${toki}; domain=.nanpa.la; path=/`; }

// o alasa e sona tan poki ilo pi jan lukin
function tanPoki() { return document.cookie.split("; ").find((row) => row.startsWith("t="))?.split("=")[1]; }

// o alasa e sona tan nasin pi lipu ilo
function tanNasin() {

  // ijo
  const ilo = new URLSearchParams(window.location.search);
  const sona = ilo.get("t");
  if (!sona)
    return;

  // o alasa e sona
  const p = sona.includes('p') ? 'p' : '';
  const l = sona.includes('l') ? 'l' : '';
  const i = sona.includes('i') ? 'i' : '';
  const pini = sona.includes('a') ? 'a' : `${p}${l}${i}`;

  // o weka e "?t=..."
  window.history.pushState({}, document.title, window.location.pathname);

  // o pana e sona
  return pini;
}

// o ante e nasin CSS
function oAnteLukin(toki) {

  // ijo
  const s = document.documentElement.style;
  const p = document.getElementById('osp');
  const l = document.getElementById('osl');
  const i = document.getElementById('oti');
  const anpa = document.getElementById('anpa');
  const open = window.location.host.split('.')[0];
  const poka = open === "ijo" ? "" : `${open}.`;
  const lipu = window.location.pathname;

  const o = (nWan, nTu) => { return nWan.includes(nTu) ? "inline-block" : "none"; }

  // pali
  s.setProperty("--ala", toki.length > 0 ? "none" : "flex");
  s.setProperty("--sp", o(toki, "p"));
  s.setProperty("--sl", o(toki, "l"));
  s.setProperty("--ti", o(toki, "i"));
  const t = toki ? `?t=${toki}` : '';
  anpa.setAttribute("href", `https://${poka}nanpa.la${lipu}${t}`);

  if (toki.includes("a")) {
    anpa.parentElement.style.setProperty("display", "none");

  } else if (toki.includes("i")) {
    anpa.innerHTML = "Link to this page with these language settings";
    anpa.style.setProperty("font-family", "inherit");
    anpa.parentElement.style.setProperty("display", "inherit");

  } else if (toki.includes("l")) {
    anpa.innerHTML = "nasin tawa lipu ni pi toki ni";
    anpa.style.setProperty("font-family", "inherit");
    anpa.parentElement.style.setProperty("display", "inherit");

  } else {
    anpa.innerHTML = "nasin tawa lipu&ni^ pi(tokini^)";
    anpa.style.setProperty("font-family", "nasin-nanpa");
    anpa.parentElement.style.setProperty("display", "inherit");
  }
}

// lipu li open la o ni
function openLa() {

  // ijo
  const p = document.getElementById('osp');
  const l = document.getElementById('osl');
  const i = document.getElementById('oti');
  const a = [{i:p, s:'p'}, {i:l, s:'l'}, {i:i, s:'i'}];
  const anpa = document.getElementById('anpa');
  const nasin = tanNasin();
  const poki = tanPoki();
  let toki = 'p';

  // pali
  for (const w of a) {
    w.i.addEventListener('change', function() {
      if (this.checked) { toki += w.s; }
      else { toki = toki.replace(w.s, ''); }
      tawaPoki(toki);
      oAnteLukin(toki);
    });
  }

  if      (nasin) { toki = nasin; tawaPoki(toki); }
  else if (poki)  { toki = poki;                  }
  else            {               tawaPoki(toki); }

  p.checked = toki.includes('p');
  l.checked = toki.includes('l');
  i.checked = toki.includes('i');

  oAnteLukin(toki);
}

document.addEventListener('DOMContentLoaded', openLa);
