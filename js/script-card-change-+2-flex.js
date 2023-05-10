const card2 = document.querySelector("#plus2-flex");
const images2 = [
  "cards/uno-card-+2-flex-r.png",
  "cards/uno-card-+2-flex-g.png",
  "cards/uno-card-+2-flex-b.png",
  "cards/uno-card-+2-flex-y.png",
];
let currentIndex2 = 0;

function changeImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  const nextImage2 = images2[currentIndex2];
  card2.src = nextImage2;
}

setInterval(changeImage2, 2000);
