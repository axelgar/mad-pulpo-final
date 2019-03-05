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
      const VIEW_CURRENT_POSITION = index + 1;
      const VIEW_NEXT_POSITION =  VIEW_CURRENT_POSITION + 1;
      const VIEW_PREVIOUS_POSITION =  VIEW_CURRENT_POSITION - 0.5;

      if (checkTitleInView(title, VIEW_CURRENT_POSITION, VIEW_NEXT_POSITION)) {
        addClassAnimation(index);
      }
      if (chechkTitleOutOfView(title, VIEW_CURRENT_POSITION, VIEW_NEXT_POSITION, VIEW_PREVIOUS_POSITION)) {
        removeClassAnimation(index);
      }
    })
  })

  function checkTitleInView(title, position, nextPosition) {
    if(title.top > snapContainer.clientHeight*position && title.top < snapContainer.clientHeight*nextPosition) {
      return true;
    }
  }

  function chechkTitleOutOfView(title,position, nextPosition, previousPosition) {
    if (title.top > snapContainer.clientHeight*position && title.top < snapContainer.clientHeight*nextPosition && snapContainer.scrollTop >= snapContainer.clientHeight*nextPosition) {
      return true;
    }

    if (title.top > snapContainer.clientHeight*position && title.top < snapContainer.clientHeight*nextPosition && snapContainer.scrollTop < snapContainer.clientHeight*previousPosition) {
      return true;
    }
  }

  function addClassAnimation(index) {
    listSectionTitles[index].classList.add('slide-in-left');
  }

  function removeClassAnimation(index) {
    listSectionTitles[index].classList.remove('slide-in-left');
  }

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