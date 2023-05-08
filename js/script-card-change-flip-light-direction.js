const cardLD = document.querySelector("#light-direction-card");
const imagesLD = [
  "cards/uno-card-flip-light-direction-r.png",
  "cards/uno-card-flip-light-direction-g.png",
  "cards/uno-card-flip-light-direction-b.png",
  "cards/uno-card-flip-light-direction-y.png",
];
let currentIndexLD = 0;

function changeImageLD() {
  currentIndexLD = (currentIndexLD + 1) % imagesLD.length;
  const nextImageLD = imagesLD[currentIndexLD];
  cardLD.src = nextImageLD;
}

setInterval(changeImageLD, 2000);
