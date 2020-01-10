import './scss/index.scss';

const carouselContent = document.querySelector('#js-carousel-content');
const testimonials = carouselContent.querySelectorAll('.testimonial');
const prevButton = document.querySelector('#js-prev');
const nextButton = document.querySelector('#js-next');

let counter = 1;
const size = testimonials[0].clientWidth;
carouselContent.style.transform = `translateX(${-size * counter}px)`;

prevButton.addEventListener('click', () => {
  if (counter <= 0) return;
  counter -= 1;
  carouselContent.style.transition = 'transform .5s ease-in-out';
  carouselContent.style.transform = `translateX(${-size * counter}px)`;
});

nextButton.addEventListener('click', () => {
  if (counter >= testimonials.length - 1) return;
  counter += 1;
  carouselContent.style.transition = 'transform .5s ease-in-out';
  carouselContent.style.transform = `translateX(${-size * counter}px)`;
});

carouselContent.addEventListener('transitionend', () => {
  if (testimonials[counter].id === 'first') {
    carouselContent.style.transition = 'none';
    counter = testimonials.length - 1;
    carouselContent.style.transform = `translateX(${-size * counter}px)`;
  }

  if (testimonials[counter].id === 'last') {
    carouselContent.style.transition = 'none';
    counter = testimonials.length - counter;
    carouselContent.style.transform = `translateX(${-size * counter}px)`;
  }
});
