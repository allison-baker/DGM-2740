function toggleNav() {
  document.querySelector("#hamburgerBtn").classList.toggle("open");
  document.querySelector("#primaryNav").classList.toggle("open");
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 2000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

function toggleDropdown(idName) {
  document.querySelector(idName).classList.toggle('open');
}