'use strict';

const main = () => {
  const snapContainer = document.querySelector('#site-main');
  const listSectionTitles = document.querySelectorAll('h2.section-title');
  const titlesElements = [];

  listSectionTitles.forEach((element) => {
    titlesElements.push(element.getBoundingClientRect())
  })

  snapContainer.addEventListener('scroll', () => {
    titlesElements.forEach((title, index) => {
      let VIEW_CURRENT_POSITION = index + 1;
      if (index === 4) {
        VIEW_CURRENT_POSITION = index + 2;
      }
      const VIEW_NEXT_POSITION =  VIEW_CURRENT_POSITION + 1;
      const VIEW_PREVIOUS_POSITION =  VIEW_CURRENT_POSITION - 0.5;
      const heigth = snapContainer.clientHeight;
      const topViewPosition = heigth * VIEW_CURRENT_POSITION ;
      const bottomViewPosition = heigth * VIEW_NEXT_POSITION;
      const previoysPosition = heigth * VIEW_PREVIOUS_POSITION;

      if (checkTitleInView(title, topViewPosition, bottomViewPosition)) {
        addClassAnimation(index);
      }

      if (chechkTitleOutOfView(title, topViewPosition, bottomViewPosition, previoysPosition)) {
        removeClassAnimation(index);
      }
    })
  })

  function checkTitleInView(title, topPosition, bottomPosition) {
    if(title.top > topPosition && title.top < bottomPosition) {
      return true;
    }
  }

  function chechkTitleOutOfView(title, topPosition, bottomPosition, previousPosition) {
    if (title.top > topPosition && title.top < bottomPosition && snapContainer.scrollTop >= bottomPosition) {
      return true;
    }

    if (title.top > topPosition && title.top < bottomPosition && snapContainer.scrollTop < previousPosition) {
      return true;
    }
  }

  function addClassAnimation(index) {
    listSectionTitles[index].classList.add('slide-in-left');
  }

  function removeClassAnimation(index) {
    listSectionTitles[index].classList.remove('slide-in-left');
  }

  // window.addEventListener('resize', () => {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // });

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