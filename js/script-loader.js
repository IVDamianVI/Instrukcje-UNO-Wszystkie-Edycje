document.addEventListener("DOMContentLoaded", function () {
  // Po 2 sekundach dodajemy klasę "loaded" do body
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 1000);
});
