function oPanaESuli(suli) {
  const tenpo = new Date();
  tenpo.setDate(tenpo.getDate() + 30);
  document.cookie = `suli=${suli}; expires=${tenpo.toUTCString()}; domain=.nanpa.la; path=/`;
}

function oLukinESuli() {
  const suli = document.cookie.replace(/(?:(?:^|.*;\s*)suli\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  return parseFloat(suli) || 1;
}

window.visualViewport.addEventListener('resize', () => {
  oPanaESuli(window.outerWidth / window.innerWidth);
});
