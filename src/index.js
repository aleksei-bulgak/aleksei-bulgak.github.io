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

appendStyleWhenInViewPort('.trainings__item', 'trainings__item--animated');
