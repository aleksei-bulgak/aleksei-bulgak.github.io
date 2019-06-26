/* eslint-disable no-undef */
import '../styles/styles.scss';

function isInViewPort(element) {
  const bounding = element.getBoundingClientRect();
  if ((bounding.bottom + bounding.top) / 2.5 < (window.innerHeight || document.documentElement.clientHeight)) {
    return true;
  }

  return false;
}

function appendStyleWhenInViewPort(elementSelector, styleClass) {
  window.addEventListener('scroll', () => {
    document.body.querySelectorAll(elementSelector).forEach(e => {
      if (isInViewPort(e) && !e.classList.contains(styleClass)) {
        e.classList.add(styleClass);
      }
    });
  });
}

function easterEgg() {
  let counter = 0;
  document.body.querySelector('.intro__photo>img').addEventListener('click', e => {
    counter += 1;
    if (counter === 10) {
      e.target.parentElement.classList.add('egg');
    } else {
      e.target.parentElement.classList.remove('egg');
    }
  });
}

appendStyleWhenInViewPort('.trainings__item', 'trainings__item--animated');
easterEgg();
