const currYear = new Date();
document.querySelector('#year').textContent = currYear.getFullYear();

const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('move');
    hb.classList.toggle('open');
})