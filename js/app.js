// Side navigation toggle
var navToggle = document.querySelector('.nav-toggle');
var navList = document.querySelector('.nav-list');
var overlay = document.querySelector('.overlay');
navToggle.addEventListener('click', toggleSideNav);

overlay.addEventListener('click', function() {
    navToggle.classList.remove('open');
    navList.classList.remove('open');
    overlay.classList.remove('open');
});

navList.addEventListener('click', function(e) {
    if (e.target.closest('.nav-list__item')) {
        toggleSideNav();
    }
});

function toggleSideNav() {
    navToggle.classList.toggle('open');
    navList.classList.toggle('open');
    overlay.classList.toggle('open');
};