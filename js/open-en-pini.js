document.addEventListener('DOMContentLoaded', function() {
  const len = document.getElementsByTagName("details");

  for (const l of len) {
    l.addEventListener("toggle", function() {
      const mama = this.parentElement.parentElement;

      for (const c of mama.children) {
        const cc = c.getElementsByTagName("details")[0];
        if (cc !== this) {
          cc.open = this.open;
        }
      }
    });
  }
});
