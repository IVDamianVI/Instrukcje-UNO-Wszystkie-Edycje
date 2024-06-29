const card00 = document.querySelector("#card-0-no-mercy");
const images00 = [
    "cards/uno-card-0-no-mercy-r.png",
    "cards/uno-card-0-no-mercy-g.png",
    "cards/uno-card-0-no-mercy-b.png",
    "cards/uno-card-0-no-mercy-y.png",
];
let currentIndex00 = 0;

function changeImage00() {
    currentIndex00 = (currentIndex00 + 1) % images00.length;
    const nextImage00 = images00[currentIndex00];
    card00.src = nextImage00;
}

setInterval(changeImage00, 2000);
