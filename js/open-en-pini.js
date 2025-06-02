document.addEventListener('DOMContentLoaded', function() {
  const len = document.getElementsByTagName("details");

  for (const l of len) {
    l.addEventListener("toggle", function() {
      let mama = this.parentElement;

      if (mama.tagName === "TD") {
        mama = mama.parentElement;
        for (const c of mama.children) {
          const cc = c.getElementsByTagName("details")[0];
          if (cc !== this) {
            cc.open = this.open;
          }
        }

      } else if (mama.tagName === "DETAILS") {
        const nanpa = Array.from(mama.children).indexOf(this);
        mama = mama.parentElement.parentElement;
        for (const c of mama.children) {
          const cc = c.getElementsByTagName("details")[nanpa];
          if (cc !== this) {
            cc.open = this.open;
          }
        }
      }

    });
  }
});
