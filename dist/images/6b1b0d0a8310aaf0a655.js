const headerStatic=document.querySelector(".header_static"),headerFixed=document.querySelector(".header_fixed"),page=document.querySelector(".main");function fixMenu(){window.scrollY>headerFixed.clientHeight?(headerStatic.classList.add("header_off"),headerFixed.classList.add("header_scroll"),page.style.paddingTop=0,page.style.marginTop=headerFixed.clientHeight+"px"):(headerStatic.classList.remove("header_off"),headerFixed.classList.remove("header_scroll"),page.style.marginTop=0,page.style.paddingTop="6rem")}window.addEventListener("scroll",fixMenu);const mobileMenu=document.querySelector(".menu_mobile");function openMobileMenu(){mobileMenu.style.top=0}function closeMobileMenu(){mobileMenu.style.top="-580px"}