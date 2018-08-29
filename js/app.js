var body = document.querySelector('body');
var toggleButton = document.querySelector('.main-header__toggle-button');
var navContainer = document.querySelector('.main-header__navigation');

toggleButton.addEventListener('click', toggleSideNav);

function toggleSideNav() {
    toggleButton.classList.toggle('open');
    navContainer.classList.toggle('open');
    body.classList.toggle('scroll-disabled');
}