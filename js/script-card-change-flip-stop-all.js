const cardStopAll = document.querySelector("#stop-all-card");
const imagesStopAll = [
  "cards/uno-card-flip-stop-all-pink.png",
  "cards/uno-card-flip-stop-all-purple.png",
  "cards/uno-card-flip-stop-all-c.png",
  "cards/uno-card-flip-stop-all-o.png",
];
let currentIndexStopAll = 0;

function changeImageStopAll() {
  currentIndexStopAll = (currentIndexStopAll + 1) % imagesStopAll.length;
  const nextImageStopAll = imagesStopAll[currentIndexStopAll];
  cardStopAll.src = nextImageStopAll;
}

setInterval(changeImageStopAll, 2000);
