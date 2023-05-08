const card2 = document.querySelector("#Plus2-card");
const images2 = [
  "cards/uno-card-+2-r.png",
  "cards/uno-card-+2-g.png",
  "cards/uno-card-+2-b.png",
  "cards/uno-card-+2-y.png",
];
let currentIndex2 = 0;

function changeImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  const nextImage2 = images2[currentIndex2];
  card2.src = nextImage2;
}

setInterval(changeImage2, 2000);
