const cardDirFlexFlex = document.querySelector("#flex-direction-flex");
const imagesDirFlexFlex = [
  "cards/uno-card-flex-direction-r.png",
  "cards/uno-card-flex-direction-g.png",
  "cards/uno-card-flex-direction-b.png",
  "cards/uno-card-flex-direction-y.png",
];
let currentIndexDirFlexFlex = 0;

function changeImageDirFlexFlex() {
  currentIndexDirFlexFlex = (currentIndexDirFlexFlex + 1) % imagesDirFlexFlex.length;
  const nextImageDirFlexFlex = imagesDirFlexFlex[currentIndexDirFlexFlex];
  cardDirFlexFlex.src = nextImageDirFlexFlex;
}

setInterval(changeImageDirFlexFlex, 2000);
