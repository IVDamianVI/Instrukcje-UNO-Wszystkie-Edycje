const card5 = document.querySelector("#Plus5-card");
const images5 = [
  "cards/uno-card-flip-+5-pink.png",
  "cards/uno-card-flip-+5-purple.png",
  "cards/uno-card-flip-+5-c.png",
  "cards/uno-card-flip-+5-o.png",
];
let currentIndex5 = 0;

function changeImage5() {
  currentIndex5 = (currentIndex5 + 1) % images5.length;
  const nextImage5 = images5[currentIndex5];
  card5.src = nextImage5;
}

setInterval(changeImage5, 2000);
