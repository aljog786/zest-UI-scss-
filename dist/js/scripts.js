
const hamBurger = document.querySelector('#togglebtn');
const spanElems = document.querySelectorAll('#togglebtn span');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const logoW = document.querySelector('.logo-w');
const logoB = document.querySelector('.logo-b');

hamBurger.addEventListener('click', (event) => {
  console.log('clicked');
  event.preventDefault();
  
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    spanElems.forEach((element) => {
      element.style.backgroundColor = 'white';
    });
    logoW.style.display = 'block';
    logoB.style.display = 'none';
  } else {
    header.classList.add('open');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    spanElems.forEach((element) => {
      element.style.backgroundColor = 'black';
    });
    logoW.style.display = 'none';
    logoB.style.display = 'block';
  }
});

const dwnBtns=document.querySelectorAll('.downArrowBtn');
const divs=document.querySelectorAll('.mainDiv');
const divArray=Array.from(divs);
dwnBtns.forEach((button, index) => {
  button.addEventListener('click', ()=> {
    console.log(button);
      if (index < divArray.length - 1) {
          divArray[index + 1].scrollIntoView({ behavior: 'smooth' });
      }
  });
});
const carousel = document.querySelector('.carousel');

const carouselItems = document.querySelectorAll('.carousel_item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    const rightButton = document.querySelector('.rightarrow');
    const leftButton = document.querySelector('.leftarrow');

    rightButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
    });

    leftButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      carousel.style.transform = `translateX(-${currentIndex * 50}%)`;
    });