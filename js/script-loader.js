document.addEventListener("DOMContentLoaded", function () {
  var randomTime = Math.floor(Math.random() * 1500) + 500;

  setTimeout(function () {
    document.body.classList.add("loaded");
  }, randomTime);
});

