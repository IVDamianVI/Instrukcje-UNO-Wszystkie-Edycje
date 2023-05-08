const card1 = document.querySelector("#Plus1-card");
const images1 = [
  "cards/uno-card-flip-+1-r.png",
  "cards/uno-card-flip-+1-g.png",
  "cards/uno-card-flip-+1-b.png",
  "cards/uno-card-flip-+1-y.png",
];
let currentIndex1 = 0;

function changeImage1() {
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  const nextImage1 = images1[currentIndex1];
  card1.src = nextImage1;
}

setInterval(changeImage1, 2000);
