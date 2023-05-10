const cardDirFlex = document.querySelector("#direction-flex");
const imagesDirFlex = [
  "cards/uno-card-direction-flex-r.png",
  "cards/uno-card-direction-flex-g.png",
  "cards/uno-card-direction-flex-b.png",
  "cards/uno-card-direction-flex-y.png",
];
let currentIndexDirFlex = 0;

function changeImageDirFlex() {
  currentIndexDirFlex = (currentIndexDirFlex + 1) % imagesDirFlex.length;
  const nextImageDirFlex = imagesDirFlex[currentIndexDirFlex];
  cardDirFlex.src = nextImageDirFlex;
}

setInterval(changeImageDirFlex, 2000);
