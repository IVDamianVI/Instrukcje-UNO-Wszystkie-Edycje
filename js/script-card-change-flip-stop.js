const cardStopLight = document.querySelector("#stop-light-card");
const imagesStopLight = [
  "cards/uno-card-flip-stop-r.png",
  "cards/uno-card-flip-stop-g.png",
  "cards/uno-card-flip-stop-b.png",
  "cards/uno-card-flip-stop-y.png",
];
let currentIndexStopLight = 0;

function changeImageStopLight() {
  currentIndexStopLight = (currentIndexStopLight + 1) % imagesStopLight.length;
  const nextImageStopLight = imagesStopLight[currentIndexStopLight];
  cardStopLight.src = nextImageStopLight;
}

setInterval(changeImageStopLight, 2000);
