// Pobieranie referencji do obrazu - scrollowanie w prawo
const scrollRightButton = document.getElementById('scroll-right');

// Dodanie obsługi zdarzenia dla obrazu - scrollowanie w prawo
scrollRightButton.addEventListener('click', function() {
  // Pobranie referencji do znacznika <ul>
  const ulElement = document.querySelector('#header ul');

  // Przewijanie w prawo o szerokość znacznika <ul>
  ulElement.scrollLeft += ulElement.offsetWidth;
});

// Pobieranie referencji do obrazu - scrollowanie w lewo
const scrollLeftButton = document.getElementById('scroll-left');

// Dodanie obsługi zdarzenia dla obrazu - scrollowanie w lewo
scrollLeftButton.addEventListener('click', function() {
  // Pobranie referencji do znacznika <ul>
  const ulElement = document.querySelector('#header ul');

  // Przewijanie w lewo o szerokość znacznika <ul>
  ulElement.scrollLeft -= ulElement.offsetWidth;
});
