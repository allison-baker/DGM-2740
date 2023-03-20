const currYear = new Date();
document.querySelector('#year').textContent = currYear.getFullYear();

const hb = document.querySelector('#hamburgerButton');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
})