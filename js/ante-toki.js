// o awen e sona lon poki ilo pi jan lukin
function tawaPoki(nimi, sona) {
  document.cookie = `${nimi}=${sona}; domain=.nanpa.la; path=/`;
}

// o alasa e sona lon poki ilo pi jan lukin
function tanPoki(nimi) {
  return document.cookie.split("; ").find((row) => row.startsWith(`${nimi}=`))?.split("=")[1];
}

// o alasa e sona lon nasin pi lipu ilo
function tanNasin(nimi) {

  // ijo
  const ilo = new URLSearchParams(window.location.search);
  const sona = ilo.get(nimi);

  // pali
  window.history.pushState({}, document.title, window.location.pathname);
  return sona;
}

// o ante e nasin CSS
function oAnteLukin(toki) {

  // ijo
  const ilo = document.getElementById('ante-toki');
  const s = document.documentElement.style;
  const o = (nWan, nTu) => { return nWan.includes(nTu) ? "inline-block" : "none"; }

  // pali
  s.setProperty("--ala", toki.includes("a") ? "flex" : "none")
  s.setProperty("--sp", o(toki, "s"));
  s.setProperty("--tp", o(toki, "t"));
  s.setProperty("--en", o(toki, "e"));
  ilo.style.setProperty("font-family", (toki.includes("a") || toki.includes("s") && !toki.includes("e")) ? "nasin-nanpa" : "Sans-serif");
}

// lipu li open la o ni
function openLa() {

  // ijo
  const ilo = document.getElementById('ante-toki');
  const nasin = tanNasin("t");
  const poki = tanPoki("t");
  let toki = "a";

  // pali

  // ilo pi ante toki li ante la..
  ilo.addEventListener('change', function() {
    // ..o awen e toki sin
    toki = this.value;
    // ..lon poki kin
    tawaPoki("t", toki);
    // o ante lukin
    oAnteLukin(toki);
  });

  if (nasin) {
    toki = nasin.split('').sort().join('');
    tawaPoki("t", toki);
    ilo.value = toki;

  } else if (poki) {
    toki = poki;
    ilo.value = toki;

  } else {
    tawaPoki("t", toki);
  }
  oAnteLukin(toki);
}

document.addEventListener('DOMContentLoaded', openLa);
