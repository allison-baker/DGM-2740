// Inject current year in footer
const currYear = new Date();
document.querySelector('#year').textContent = currYear.getFullYear();

function toggleNav() {
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamburgerButton').classList.toggle('open');
}