const cardStop = document.querySelector("#stop-no-mercy");
const imagesStop = [
    "cards/uno-card-stop-no-mercy-r.png",
    "cards/uno-card-stop-no-mercy-g.png",
    "cards/uno-card-stop-no-mercy-b.png",
    "cards/uno-card-stop-no-mercy-y.png",
];
let currentIndexStop = 0;

function changeImageStop() {
    currentIndexStop = (currentIndexStop + 1) % imagesStop.length;
    const nextImageStop = imagesStop[currentIndexStop];
    cardStop.src = nextImageStop;
}

setInterval(changeImageStop, 2000);
