const cardAll = document.querySelector("#all-no-mercy");
const imagesAll = [
    "cards/uno-card-all-no-mercy-r.png",
    "cards/uno-card-all-no-mercy-g.png",
    "cards/uno-card-all-no-mercy-b.png",
    "cards/uno-card-all-no-mercy-y.png",
];
let currentIndexAll = 0;

function changeImageAll() {
    currentIndexAll = (currentIndexAll + 1) % imagesAll.length;
    const nextImageAll = imagesAll[currentIndexAll];
    cardAll.src = nextImageAll;
}

setInterval(changeImageAll, 2000);
