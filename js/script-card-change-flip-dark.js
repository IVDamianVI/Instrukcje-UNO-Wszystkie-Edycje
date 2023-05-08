const cardFlipDarkCard = document.querySelector("#flip-dark-card");
const imagesFlipDarkCard = [
  "cards/uno-card-flip-pink.png",
  "cards/uno-card-flip-purple.png",
  "cards/uno-card-flip-c.png",
  "cards/uno-card-flip-o.png",
];
let currentIndexFlipDarkCard = 0;

function changeImageFlipDarkCard() {
  currentIndexFlipDarkCard = (currentIndexFlipDarkCard + 1) % imagesFlipDarkCard.length;
  const nextImageFlipDarkCard = imagesFlipDarkCard[currentIndexFlipDarkCard];
  cardFlipDarkCard.src = nextImageFlipDarkCard;
}

setInterval(changeImageFlipDarkCard, 2000);
