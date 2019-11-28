/* eslint-disable no-undef */
import '../styles/styles.scss';

const options = {
  threshold: 0.5
};
const intersectionObserver = new IntersectionObserver(elements => {
  elements
    .filter(e => e.isIntersecting)
    .forEach(e => {
      e.target.classList.add('trainings__item--animated');
      intersectionObserver.unobserve(e.target);
    });
}, options);

[...document.querySelectorAll('.trainings__item')].forEach(elem => {
  intersectionObserver.observe(elem);
});
