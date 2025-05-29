function nasa() {
  const ken = [
    "0001",
    "0002",
    "0003",
    "alp",
    "o-ken-ala-ken-tawa",
  ];
  const kama = ken[Math.floor(Math.random() * ken.length)];
  location.href = `https://nasa.nanpa.la/${kama}/`;
}
