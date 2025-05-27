function panaSona(nimi, sona) {
  document.cookie = `${nimi}=${sona}; domain=.nanpa.la; path=/`;
}

function kamaSona(nimi) {
  return document.cookie.split("; ").find((row) => row.startsWith(`${nimi}=`))?.split("=")[1];
}

function oAnteLukin(toki) {
  const s = document.documentElement.style;
  function o(a, b) { return a.includes(b) ? "inline-block" : "none"; }
  s.setProperty("--sp", o(toki, "sp"));
  s.setProperty("--tp", o(toki, "tp"));
  s.setProperty("--en", o(toki, "en"));
}

function openLa() {
  let toki = kamaSona("toki");
  if (!toki) {
    toki = "sp";
    panaSona("toki", toki);
  }
  oAnteLukin(toki);

  const ijo = document.getElementById('ante-toki');
  ijo.style.setProperty("font-family", (toki === "sp" || toki === "sp,tp") ? "nasin-nanpa" : "Sans-serif");
  ijo.addEventListener('change', function() {
    const toki = this.value;
    panaSona("toki", toki);
    oAnteLukin(toki);
    this.style.setProperty("font-family", (toki === "sp" || toki === "sp,tp") ? "nasin-nanpa" : "Sans-serif");
  });

}

document.addEventListener('DOMContentLoaded', openLa);
