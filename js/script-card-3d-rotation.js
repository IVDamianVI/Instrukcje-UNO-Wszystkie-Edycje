const cards = document.querySelectorAll(".card");
const boxes = document.querySelectorAll(".box");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 12;
let inactiveTimer;

function handleHover(e) {
  resetInactiveTimer();
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth } = currentTarget;

  const rect = currentTarget.getBoundingClientRect();
  const offsetX = clientX - rect.left - 40;
  const offsetY = clientY - rect.top + 120;
  const horizontal = (offsetX / clientWidth) * 2;
  const vertical = (offsetY / window.innerHeight) * 2;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (THRESHOLD / 2 - vertical * THRESHOLD).toFixed(2);

  currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  e.currentTarget.style.transform = "";
}

function resetInactiveTimer() {
  clearTimeout(inactiveTimer);
  inactiveTimer = setTimeout(() => {
    cards.forEach((card) => {
      card.style.transform = "";
    });
    boxes.forEach((box) => {
      box.style.transform = "";
    });
  }, 500);
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

  resetInactiveTimer();
}
