const cardD = document.querySelector("#direction-card");
const imagesD = [
  "cards/uno-card-direction-r.png",
  "cards/uno-card-direction-g.png",
  "cards/uno-card-direction-b.png",
  "cards/uno-card-direction-y.png",
];
let currentIndexD = 0;

function changeImageD() {
  currentIndexD = (currentIndexD + 1) % imagesD.length;
  const nextImageD = imagesD[currentIndexD];
  cardD.src = nextImageD;
}

setInterval(changeImageD, 2000);
