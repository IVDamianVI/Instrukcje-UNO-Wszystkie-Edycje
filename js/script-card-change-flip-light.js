const cardFlipLightCard = document.querySelector("#flip-light-card");
const imagesFlipLightCard = [
  "cards/uno-card-flip-r.png",
  "cards/uno-card-flip-g.png",
  "cards/uno-card-flip-b.png",
  "cards/uno-card-flip-y.png",
];
let currentIndexFlipLightCard = 0;

function changeImageFlipLightCard() {
  currentIndexFlipLightCard = (currentIndexFlipLightCard + 1) % imagesFlipLightCard.length;
  const nextImageFlipLightCard = imagesFlipLightCard[currentIndexFlipLightCard];
  cardFlipLightCard.src = nextImageFlipLightCard;
}

setInterval(changeImageFlipLightCard, 2000);
