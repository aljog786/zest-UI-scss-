
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
