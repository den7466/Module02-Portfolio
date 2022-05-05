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

//Polyfill for forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

//Dropdown select
  document.querySelectorAll('.connection__dropdown').forEach(function(dropDownWrapper){
  const dropDownBtn = dropDownWrapper.querySelector('.connection__dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.connection__dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.connection__dropdown__item');
  const dropDownInput = dropDownWrapper.querySelector('.connection__dropdown__input_hidden');

  dropDownBtn.addEventListener('click', function(){
    dropDownList.classList.toggle('connection__dropdown__list_visible');
    this.classList.add('connection__dropdown__list_active');
  });

  dropDownListItems.forEach(function(listItem){
    listItem.addEventListener('click', function(e){
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('connection__dropdown__list_visible');
    });
  });

  document.addEventListener('click', function(e){
    if(e.target !== dropDownBtn){
      dropDownBtn.classList.remove('connection__dropdown__list_active');
      dropDownList.classList.remove('connection__dropdown__list_visible');
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Tab' || e.key === 'Escape'){
      dropDownBtn.classList.remove('connection__dropdown__list_active');
      dropDownList.classList.remove('connection__dropdown__list_visible');
    }
  });
});