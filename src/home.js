import Logo from './logo.png';

export default function loadHomePage() {
  const logo = document.createElement('img');
  logo.src = Logo;
  logo.classList.add('logo');

  const copy = document.createElement('p');
  copy.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
  culpa qui officia deserunt mollit anim id est laborum.`;

  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  const leftBtn = document.createElement('button');
  leftBtn.textContent = 'Previous';
  leftBtn.classList.add('leftBtn');
  leftBtn.addEventListener('click', scrollLeft);
  const rightBtn = document.createElement('button');
  rightBtn.textContent = 'Next';
  rightBtn.classList.add('rightBtn');
  rightBtn.addEventListener('click', scrollRight);
  const slides = document.createElement('div');
  slides.classList.add('slides');

  const slide1 = document.createElement('div');
  slide1.classList.add('slide');
  slide1.textContent = '1';

  const slide2 = document.createElement('div');
  slide2.classList.add('slide');
  slide2.textContent = '2';

  const slide3 = document.createElement('div');
  slide3.classList.add('slide');
  slide3.textContent = '3';

  const slide4 = document.createElement('div');
  slide4.classList.add('slide');
  slide4.textContent = '4';

  const dots = document.createElement('div');
  dots.classList.add('dots');
  const dot1 = document.createElement('div');
  dot1.classList.add('dot', 'current-dot');
  dot1.addEventListener('click', getClickedDotIndex);
  const dot2 = document.createElement('div');
  dot2.classList.add('dot');
  dot2.addEventListener('click', getClickedDotIndex);
  const dot3 = document.createElement('div');
  dot3.classList.add('dot');
  dot3.addEventListener('click', getClickedDotIndex);
  const dot4 = document.createElement('div');
  dot4.classList.add('dot');
  dot4.addEventListener('click', getClickedDotIndex);
  
  slides.append(slide1, slide2, slide3, slide4);
  carousel.append(leftBtn, slides, rightBtn);
  dots.append(dot1, dot2, dot3, dot4);
  content.append(logo, copy, carousel, dots);

  scrollToPosition(slides.children.length - 1);
  autoScroll();
}

var autoTimer;

function scrollRight() {
  var dots = Array.from(document.querySelectorAll('.dot'));
  var index = dots.indexOf(document.querySelector('.current-dot'));
  var nextSlide;
  (index === dots.length - 1) ? nextSlide = 0 : nextSlide = index + 1;
  scrollToPosition(nextSlide);
}

function scrollLeft() {
  var dots = Array.from(document.querySelectorAll('.dot'));
  var index = dots.indexOf(document.querySelector('.current-dot'));
  var prevSlide;
  (index === 0) ? prevSlide = dots.length - 1 : prevSlide = index - 1;
  scrollToPosition(prevSlide);
}

function getClickedDotIndex(e) {
  var index = Array.from(e.target.parentNode.children).indexOf(e.target);
  scrollToPosition(index);
}

function scrollToPosition(index) {
  const scrollInterval = 25;
  document.querySelector('.slides').style.transform = `translate(-${index * scrollInterval}%)`;
  document.querySelector('.current-dot').classList.toggle('current-dot');
  document.querySelectorAll('.dot')[index].classList.add('current-dot');
}

function autoScroll() {
  var autoScrollInterval = 5000;
  scrollRight();
  autoTimer = setTimeout(autoScroll, autoScrollInterval);
}