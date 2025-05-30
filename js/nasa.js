function nasa() {
  const ken = [
    "",
    "alp",
    "nasitan",
    "ilo-pi-lawa-tawa-pi-suno-pi-kule-tu-wan",
  ];
  const kama = ken[Math.floor(Math.random() * ken.length)];
  location.href = `https://nasa.nanpa.la/${kama}`;
}
