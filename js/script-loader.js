document.addEventListener("DOMContentLoaded", function () {
  // Losowy czas w milisekundach od 1000 do 2000
  var randomTime = Math.floor(Math.random() * 2000) + 1000;

  // Po losowym czasie dodajemy klasę "loaded" do body
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, randomTime);
});

