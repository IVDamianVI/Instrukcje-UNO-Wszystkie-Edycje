const cardExpressOne = document.querySelector("#express-1-card");
const imagesExpressOne = [
  "cards/uno-card-express-+1-r.png",
  "cards/uno-card-express-+1-g.png",
  "cards/uno-card-express-+1-b.png",
  "cards/uno-card-express-+1-y.png",
];
let currentIndexExpressOne = 0;

function changeImageExpressOne() {
  currentIndexExpressOne = (currentIndexExpressOne + 1) % imagesExpressOne.length;
  const nextImageExpressOne = imagesExpressOne[currentIndexExpressOne];
  cardExpressOne.src = nextImageExpressOne;
}

setInterval(changeImageExpressOne, 2000);
