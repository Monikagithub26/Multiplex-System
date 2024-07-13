var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});
document.getElementById("Upcome").addEventListener("click", function() {
  resetButtons();
  this.classList.add("clicked");
});

document.getElementById("Release").addEventListener("click", function() {
  resetButtons();
  this.classList.add("clicked");
});

function resetButtons() {
  var buttons = document.querySelectorAll(".UpcomeRelease");
  buttons.forEach(function(button) {
    button.classList.remove("clicked");
  });
}