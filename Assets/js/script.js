'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);



/**
 * Scroll Reveal 
 */

ScrollReveal({ 
  reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
});

ScrollReveal().reveal('.heading, .water-color, .acrylic, .reviews, .fb, .ig, .pin, .top', { origin: 'top' });
ScrollReveal().reveal('.header, .logo-3, .skill-banner, .portrait-painting, .charcoal-Painting, .title-lg, .tw, .ld, .butt', { origin: 'bottom' });
ScrollReveal().reveal('.hero-content, .about-img, .logo-1, .logo-2, .about-banner, .section-title, .sketch, .lefty',  { origin: 'left' });
ScrollReveal().reveal('.social-media-hero, .hero-banner, .logo-4, .logo-5, .about-content, .cartooning, .btn btn-tertiary, .righty, .contact-form', { origin: 'right' });


/*==================== Typed js ====================*/
const typed = new   Typed('.multiple-text', {
   strings: ['Film Maker', 'Creative Director', 'Video Editor'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true,
});