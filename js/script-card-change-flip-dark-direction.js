const cardDarkD = document.querySelector("#dark-direction-card");
const imagesDarkD = [
  "cards/uno-card-flip-direction-pink.png",
  "cards/uno-card-flip-direction-purple.png",
  "cards/uno-card-flip-direction-c.png",
  "cards/uno-card-flip-direction-o.png",
];
let currentIndexDarkD = 0;

function changeImageDarkD() {
  currentIndexDarkD = (currentIndexDarkD + 1) % imagesDarkD.length;
  const nextImageDarkD = imagesDarkD[currentIndexDarkD];
  cardDarkD.src = nextImageDarkD;
}

setInterval(changeImageDarkD, 2000);
