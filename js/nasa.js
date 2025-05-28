function nasa() {
  const ken = [
    "alp",
    "leko",
  ];
  const kama = ken[Math.floor(Math.random() * ken.length)];
  location.href = `https://nasa.nanpa.la/${kama}/`;
}
