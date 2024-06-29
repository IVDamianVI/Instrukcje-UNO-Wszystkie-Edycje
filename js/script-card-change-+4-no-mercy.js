const card04 = document.querySelector("#plus4-no-mercy");
const images04 = [
    "cards/uno-card-+4-no-mercy-r.png",
    "cards/uno-card-+4-no-mercy-g.png",
    "cards/uno-card-+4-no-mercy-b.png",
    "cards/uno-card-+4-no-mercy-y.png",
];
let currentIndex04 = 0;

function changeImage04() {
    currentIndex04 = (currentIndex04 + 1) % images04.length;
    const nextImage04 = images04[currentIndex04];
    card04.src = nextImage04;
}

setInterval(changeImage04, 2000);
