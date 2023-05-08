const cardS = document.querySelector("#stop-card");
const imagesS = [
  "cards/uno-card-stop-r.png",
  "cards/uno-card-stop-g.png",
  "cards/uno-card-stop-b.png",
  "cards/uno-card-stop-y.png",
];
let currentIndexS = 0;

function changeImageS() {
  currentIndexS = (currentIndexS + 1) % imagesS.length;
  const nextImageS = imagesS[currentIndexS];
  cardS.src = nextImageS;
}

setInterval(changeImageS, 2000);
