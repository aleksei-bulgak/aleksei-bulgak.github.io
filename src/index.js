import '../styles/styles.scss';

appendStyleWhenInViewPort('.trainings__item', 'trainings__item--animated');

function appendStyleWhenInViewPort(elementSelector, styleClass) {
  window.addEventListener('scroll', () => {
    document.body
      .querySelectorAll(elementSelector)
      .forEach(e => {
        if(isInViewPort(e) && !e.classList.contains(styleClass)) {
          e.classList.add(styleClass);
        }
      });
  });
}

function isInViewPort(element) {
  const bounding = element.getBoundingClientRect();
  if (
    (bounding.bottom + bounding.top) / 2.5 <
    (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  }

  return false;
}
