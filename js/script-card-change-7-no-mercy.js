const card07 = document.querySelector("#card-7-no-mercy");
const images07 = [
    "cards/uno-card-7-no-mercy-r.png",
    "cards/uno-card-7-no-mercy-g.png",
    "cards/uno-card-7-no-mercy-b.png",
    "cards/uno-card-7-no-mercy-y.png",
];
let currentIndex07 = 0;

function changeImage07() {
    currentIndex07 = (currentIndex07 + 1) % images07.length;
    const nextImage07 = images07[currentIndex07];
    card07.src = nextImage07;
}

setInterval(changeImage07, 2000);
