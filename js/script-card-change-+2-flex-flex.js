const cardPlusDwaFlex = document.querySelector("#dwa-flex-card");
const imagesPlusDwaFlex = [
  "cards/uno-card-flex-+2-r.png",
  "cards/uno-card-flex-+2-g.png",
  "cards/uno-card-flex-+2-b.png",
  "cards/uno-card-flex-+2-y.png",
];
let currentIndexPlusDwaFlex = 0;

function changeImagePlusDwaFlex() {
  currentIndexPlusDwaFlex = (currentIndexPlusDwaFlex + 1) % imagesPlusDwaFlex.length;
  const nextImagePlusDwaFlex = imagesPlusDwaFlex[currentIndexPlusDwaFlex];
  cardPlusDwaFlex.src = nextImagePlusDwaFlex;
}

setInterval(changeImagePlusDwaFlex, 2000);
