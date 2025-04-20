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
    if (toki === "en") {
      document.documentElement.style.setProperty("--sp", "none");
      document.documentElement.style.setProperty("--tp", "none");
      document.documentElement.style.setProperty("--en", "block");
    } else if (toki === "tp") {
      document.documentElement.style.setProperty("--sp", "none");
      document.documentElement.style.setProperty("--tp", "block");
      document.documentElement.style.setProperty("--en", "none");
    } else { // sp
      document.documentElement.style.setProperty("--sp", "block");
      document.documentElement.style.setProperty("--tp", "none");
      document.documentElement.style.setProperty("--en", "none");
    }
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
  });
});
