const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const video = document.querySelector('.header__video');
const textBox = document.querySelector('.header__text-box');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('close');
    menu.classList.toggle('move-left');
    video.classList.toggle('move-left');
    textBox.classList.toggle('move-left');
    main.classList.toggle('move-left');
    footer.classList.toggle('move-left');
});