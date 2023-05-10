const cardStopFlexFlex = document.querySelector("#flex-stop-flex");
const imagesStopFlexFlex = [
  "cards/uno-card-flex-direction-r.png",
  "cards/uno-card-flex-direction-g.png",
  "cards/uno-card-flex-direction-b.png",
  "cards/uno-card-flex-direction-y.png",
];
let currentIndexStopFlexFlex = 0;

function changeImageStopFlexFlex() {
  currentIndexStopFlexFlex = (currentIndexStopFlexFlex + 1) % imagesStopFlexFlex.length;
  const nextImageStopFlexFlex = imagesStopFlexFlex[currentIndexStopFlexFlex];
  cardStopFlexFlex.src = nextImageStopFlexFlex;
}

setInterval(changeImageStopFlexFlex, 2000);
