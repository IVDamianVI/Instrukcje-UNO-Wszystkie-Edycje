const cardDos = document.querySelector("#dos-card");
const imagesDos = [
  "cards/dos-card-hash-r.png",
  "cards/dos-card-hash-g.png",
  "cards/dos-card-hash-b.png",
  "cards/dos-card-hash-y.png",
];
let currentIndexDos = 0;

function changeImageDos() {
  currentIndexDos = (currentIndexDos + 1) % imagesDos.length;
  const nextImageDos = imagesDos[currentIndexDos];
  cardDos.src = nextImageDos;
}

setInterval(changeImageDos, 2000);
