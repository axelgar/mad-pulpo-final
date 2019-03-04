'use strict';

const main = () => {
  const snapContainer = document.querySelector('#site-main');
  const listSectionTitles = document.querySelectorAll('.section-title');
  const titlesElements = []

  listSectionTitles.forEach((element) => {
    titlesElements.push(element.getBoundingClientRect())
  })
  snapContainer.addEventListener('scroll', () => {
    titlesElements.forEach((title, index) => {
      const position = index + 1; 
      if(title.top > window.innerHeight*position && title.top < window.innerHeight*(position + 1) && snapContainer.scrollTop === window.innerHeight*position) {
        listSectionTitles[index].classList.add('slide-in-left');
      }

      if (title.top > window.innerHeight*position && title.top < window.innerHeight*(position + 1) && snapContainer.scrollTop >= window.innerHeight*(position+1)) {
        listSectionTitles[index].classList.remove('slide-in-left');
      }

      if (title.top > window.innerHeight*position && title.top < window.innerHeight*(position + 1) && snapContainer.scrollTop < window.innerHeight*(position-0.5)) {
        listSectionTitles[index].classList.remove('slide-in-left');
      }
    })
  })

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

  // const scrollDown = () => {
  //   window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  // };

  // const arrowDown = document.querySelector('.arrow-section');
  // arrowDown.addEventListener('click', scrollDown);
};

window.addEventListener('load', main);