/* eslint-disable no-undef */
import '../styles/styles.scss';

const options = {
  threshold: 0.5,
};

const intersectionObserverHide = new IntersectionObserver(
  (elements) => {
    elements
      .filter((e) => e.isIntersecting)
      .forEach((e) => {
        e.target.classList.remove('trainings__item--animated');
        intersectionObserverHide.unobserve(e.target);
      });
  },
  {
    rootMargin: '200px',
    threshold: 0,
  }
);

const intersectionObserver = new IntersectionObserver((elements) => {
  elements
    .filter((e) => e.isIntersecting)
    .forEach((e) => {
      e.target.classList.add('trainings__item--animated');
      intersectionObserver.unobserve(e.target);
      intersectionObserverHide.unobserve(e.target);
    });
}, options);

[...document.querySelectorAll('.trainings__item')].forEach((elem) => {
  intersectionObserverHide.observe(elem);
  intersectionObserver.observe(elem);
});

document.querySelector('.navigation').addEventListener('click', (e) => {
  if (e.target.classList.contains('navigation-action')) {
    e.currentTarget.classList.toggle('active');
  }
});

document.querySelector('span[id="current-year"]').innerHTML = new Date().getFullYear();
