const currYear = new Date();
document.querySelector("#year").textContent = currYear.getFullYear();

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

const hb = document.querySelector('#hamburgerButton');
hb.addEventListener('click', () => {
  document.querySelector('#primaryNav').classList.toggle('open');
  hb.classList.toggle('open');
})