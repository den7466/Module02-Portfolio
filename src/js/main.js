// Fixed menu
const headerStatic = document.querySelector('.header_static');
const headerFixed = document.querySelector('.header_fixed');
const page = document.querySelector('.main');

function fixMenu() {
  if (window.scrollY > headerFixed.clientHeight) {
    headerStatic.classList.add('header_off');
    headerFixed.classList.add('header_scroll');
    page.style.paddingTop = 0;
    page.style.marginTop = headerFixed.clientHeight + 'px';
  } else {
    headerStatic.classList.remove('header_off');
    headerFixed.classList.remove('header_scroll');
    page.style.marginTop = 0;
    page.style.paddingTop = 6 + 'rem';
  }
}

window.addEventListener('scroll', fixMenu);

// Mobile menu
const mobileMenu = document.querySelector('.menu_mobile');
function openMobileMenu() {
    mobileMenu.style.top = 0;
}
function closeMobileMenu() {
    mobileMenu.style.top = -580 + 'px';
}