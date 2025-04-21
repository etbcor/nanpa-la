document.addEventListener('DOMContentLoaded', function() {

  function oAnteEToki(toki) {
    const tenpo = new Date();
    tenpo.setDate(tenpo.getDate() + 30);
    document.cookie = `toki=${toki}; expires=${tenpo.toUTCString()}; domain=.nanpa.la; path=/`;
  }

  function oLukinEToki() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)toki\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }

  function oPonaELipu(toki) {
    const s = document.documentElement.style;
    function o(a, b) { return a.includes(b) ? "inline-block" : "none"; }
    s.setProperty("--sp", o(toki, "sp"));
    s.setProperty("--tp", o(toki, "tp"));
    s.setProperty("--en", o(toki, "en"));
  }
  
  let toki = oLukinEToki();
  if (!toki) {
    toki = "sp";
    oAnteEToki(toki);
  }

  oPonaELipu(toki);

  const ijo = document.getElementById('ante-toki');
  ijo.value = toki;

  ijo.addEventListener('change', function() {
    const toki = this.value;
    oAnteEToki(toki);
    oPonaELipu(toki);
    this.style.setProperty("font-family", (toki === "sp" || toki === "sp,tp") ? "nasin-nanpa" : "Sans-serif");
  });
  ijo.style.setProperty("font-family", (toki === "sp" || toki === "sp,tp") ? "nasin-nanpa" : "Sans-serif");
});
