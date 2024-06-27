const hamburgerOpen = document.querySelector('#hamburger-logo');
const hamburderNavbar = document.querySelector('#hamburger-navbar');
const hamburgerClose = document.querySelector('#hamburger-close');

hamburgerOpen.addEventListener('click', () => {
    hamburderNavbar.classList.remove('-translate-x-full');
});

hamburgerClose.addEventListener('click', () => {
    hamburderNavbar.classList.add('-translate-x-full');
});