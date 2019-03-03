'use strict';

const main = () => {

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  const setTypedBehaviour = (domElement) => {
    new Typed(domElement, {
      stringsElement: '#typed-strings',
      loop: true,
      typeSpeed: 100,
    });
  }

  const setCarousel = (element) => {
    new Glide(element, {
      autoplay:true,
      animationDuration: 3000,
      type: 'carousel',
      gap: 0
    }).mount()
  }

  setTypedBehaviour('#typed')
  setCarousel('.glide')

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };
  const arrowDown = document.querySelector('.arrow-section');

  arrowDown.addEventListener('click', scrollDown);
};

window.addEventListener('load', main);