document.addEventListener('DOMContentLoaded', function() {
  function oAnteEToki(toki) {
    const tenpo = new Date();
    tenpo.setDate(tenpo.getDate() + 30);
    document.cookie = `toki=${toki}; expires=${tenpo.toUTCString()}; domain=.nanpa.la; path=/`;
  }

  function oLukinEToki() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)toki\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  }

  const ijo = document.getElementById('ante-toki');
  ijo.value = oLukinEToki();

  ijo.addEventListener('change', function() {
    const toki = this.value;
    oAnteEToki(toki);
    location.reload();
  });
});
