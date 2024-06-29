const cardDirection = document.querySelector("#direction-no-mercy");
const imagesDirection = [
    "cards/uno-card-direction-no-mercy-r.png",
    "cards/uno-card-direction-no-mercy-g.png",
    "cards/uno-card-direction-no-mercy-b.png",
    "cards/uno-card-direction-no-mercy-y.png",
];
let currentIndexDirection = 0;

function changeImageDirection() {
    currentIndexDirection = (currentIndexDirection + 1) % imagesDirection.length;
    const nextImageDirection = imagesDirection[currentIndexDirection];
    cardDirection.src = nextImageDirection;
}

setInterval(changeImageDirection, 2000);
