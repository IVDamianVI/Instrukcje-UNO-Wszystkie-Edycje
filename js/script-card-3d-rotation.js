const cards = document.querySelectorAll(".card");
const boxes = document.querySelectorAll(".box");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 12;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth } = currentTarget;

  const rect = currentTarget.getBoundingClientRect();
  const offsetX = clientX - rect.left;
  const offsetY = clientY - rect.top;
  const horizontal = (offsetX / clientWidth) * 2;
  const vertical = (offsetY / window.innerHeight) * 2;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  e.currentTarget.style.transform = "";
}

if (!motionMatchMedia.matches) {
  cards.forEach((card) => {
    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);
  });
  boxes.forEach((box) => {
    box.addEventListener("mousemove", handleHover);
    box.addEventListener("mouseleave", resetStyles);
  });
}