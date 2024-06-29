const cardStopAll = document.querySelector("#stop-all-no-mercy");
const imagesStopAll = [
    "cards/uno-card-stop-all-no-mercy-r.png",
    "cards/uno-card-stop-all-no-mercy-g.png",
    "cards/uno-card-stop-all-no-mercy-b.png",
    "cards/uno-card-stop-all-no-mercy-y.png",
];
let currentIndexStopAll = 0;

function changeImageStopAll() {
    currentIndexStopAll = (currentIndexStopAll + 1) % imagesStopAll.length;
    const nextImageStopAll = imagesStopAll[currentIndexStopAll];
    cardStopAll.src = nextImageStopAll;
}

setInterval(changeImageStopAll, 2000);
