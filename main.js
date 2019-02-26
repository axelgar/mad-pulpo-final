'use strict';

const main = () => {
  const typedElement = document.querySelector('#typed')
  const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    loop: true,
    typeSpeed: 100,
  });

  const carouselDiv = document.querySelector('.glide');
  new Glide('.glide', {
    autoplay:true,
    animationDuration: 2000,
    type: 'carousel',
    gap: 0
  }).mount()

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  const arrowDown = document.querySelector('.arrow-section');
  arrowDown.addEventListener('click', scrollDown);
};

window.addEventListener('load', main);