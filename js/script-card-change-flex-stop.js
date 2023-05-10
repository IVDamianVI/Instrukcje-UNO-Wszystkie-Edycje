const cardStopFlex = document.querySelector("#stop-flex-card");
const imagesStopFlex = [
  "cards/uno-card-stop-flex-r.png",
  "cards/uno-card-stop-flex-g.png",
  "cards/uno-card-stop-flex-b.png",
  "cards/uno-card-stop-flex-y.png",
];
let currentIndexStopFlex = 0;

function changeImageStopFlex() {
  currentIndexStopFlex = (currentIndexStopFlex + 1) % imagesStopFlex.length;
  const nextImageStopFlex = imagesStopFlex[currentIndexStopFlex];
  cardStopFlex.src = nextImageStopFlex;
}

setInterval(changeImageStopFlex, 2000);
