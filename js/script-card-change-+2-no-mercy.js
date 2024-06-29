const card02 = document.querySelector("#plus2-no-mercy");
const images02 = [
    "cards/uno-card-+2-no-mercy-r.png",
    "cards/uno-card-+2-no-mercy-g.png",
    "cards/uno-card-+2-no-mercy-b.png",
    "cards/uno-card-+2-no-mercy-y.png",
];
let currentIndex02 = 0;

function changeImage02() {
    currentIndex02 = (currentIndex02 + 1) % images02.length;
    const nextImage02 = images02[currentIndex02];
    card02.src = nextImage02;
}

setInterval(changeImage02, 2000);
