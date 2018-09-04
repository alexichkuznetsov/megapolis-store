var body = document.querySelector('body');
var toggleButton = document.querySelector('.main-header__toggle-button');
var navContainer = document.querySelector('.main-header__navigation');

toggleButton.addEventListener('click', toggleSideNav);
navContainer.addEventListener('click', function(e) {
    if (e.target.closest('.nav-list__item')) {
        toggleSideNav();
        body.classList.toggle('scroll-disabled');
    }
});

function toggleSideNav() {
    toggleButton.classList.toggle('open');
    navContainer.classList.toggle('open');
    body.classList.toggle('scroll-disabled');
}

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3000
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
