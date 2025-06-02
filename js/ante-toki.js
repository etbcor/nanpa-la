// o awen e sona lon poki ilo pi jan lukin
function tawaPoki(toki) {
  document.cookie = `t=${toki}; domain=.nanpa.la; path=/`;
}

// o alasa e sona lon poki ilo pi jan lukin
function tanPoki() {
  return document.cookie.split("; ").find((row) => row.startsWith("t="))?.split("=")[1];
}

// o alasa e sona lon nasin pi lipu ilo
function tanNasin() {

  // ijo
  const ilo = new URLSearchParams(window.location.search);
  const sona = ilo.get("t");
  if (!sona)
    return;

  // o alasa e sona
  const s = sona.includes("s") ? "s" : "";
  const t = sona.includes("t") ? "t" : "";
  const e = sona.includes("e") ? "e" : "";
  const pini = `${s}${t}${e}`;

  // o weka e "?t=..."
  window.history.pushState({}, document.title, window.location.pathname);

  // o pana e sona
  return pini;
}

// o ante e nasin CSS
function oAnteLukin(toki) {

  // ijo
  const ilo = document.getElementById('ante-toki');
  const anpa = document.getElementById('anpa');
  const s = document.documentElement.style;
  const o = (nWan, nTu) => { return nWan.includes(nTu) ? "inline-block" : "none"; }
  const open = window.location.host.split('.')[0];
  const poka = open === "ijo" ? "" : `${open}.`;
  const lipu = window.location.pathname;

  // pali
  ilo.style.setProperty("font-family", (toki.includes("a") || toki.includes("s") && !toki.includes("e")) ? "nasin-nanpa" : "Sans-serif");
  s.setProperty("--ala", toki.includes("a") ? "flex" : "none")
  s.setProperty("--sp", o(toki, "s"));
  s.setProperty("--tp", o(toki, "t"));
  s.setProperty("--en", o(toki, "e"));
  anpa.setAttribute("href", `https://${poka}nanpa.la${lipu}?t=${toki}`);

  if (toki.includes("a")) {
    anpa.parentElement.style.setProperty("display", "none");
  } else if (toki.includes("e")) {
    anpa.innerHTML = "Link to this page with these language settings";
    anpa.style.setProperty("font-family", "inherit");
    anpa.parentElement.style.setProperty("display", "inherit");
  } else if (toki.includes("t")) {
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
  const ilo = document.getElementById('ante-toki');
  const anpa = document.getElementById('anpa');
  const nasin = tanNasin();
  const poki = tanPoki();
  let toki = "a";

  // pali

  // ilo pi ante toki li ante la..
  ilo.addEventListener('change', function() {
    // ..o awen e toki sin
    toki = this.value;
    // ..lon poki kin
    tawaPoki(toki);
    // o ante lukin
    oAnteLukin(toki);
  });

  if (nasin) {
    toki = nasin;
    tawaPoki(toki);
    ilo.value = toki;

  } else if (poki) {
    toki = poki;
    ilo.value = toki;

  } else {
    tawaPoki(toki);
  }
  oAnteLukin(toki);
}

document.addEventListener('DOMContentLoaded', openLa);
