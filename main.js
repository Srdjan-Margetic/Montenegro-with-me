const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const video = document.querySelector('.header__video');
const textBox = document.querySelector('.header__text-box');
const main = document.querySelector('main');
const footer = document.querySelector('.footer');
const footerRight = document.querySelector('.footer__content--right');
const navLink = document.querySelectorAll('.menu a');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('close');
    menu.classList.toggle('move-left');
    video.classList.toggle('move-left');
    textBox.classList.toggle('move-left');
    main.classList.toggle('move-left');
    footer.classList.toggle('move-left');
});

    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function() {
          menu.classList.remove("move-left");
          video.classList.remove('move-left');
          textBox.classList.remove('move-left');
          main.classList.remove('move-left');
          footer.classList.remove('move-left');
          toggle.classList.remove('close');
        });
    }

const renderCountry = function(data, className = '' ) {
    const html = `
    <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <h3 class="country__name">${data.name}</h3>
        <div class="info-side"> 
            <p class="time__zone"><span>⏱</span> ${data.timezones[0]}</p>
            <p class="population"><span>👫 </span> ${ +(data.population / 1000000).toFixed(1)} mil. people</p>
            <p class="language"><span>🗣️</span> Montenegrian</p>
            <p class="currency"><span>💰</span> ${data.currencies[0].name}</p>
        </div>
    </div>
</article> `
    footerRight.insertAdjacentHTML('beforeend', html);
}

const renderError = function(msg) {
    footerRight.insertAdjacentText('beforeend', msg);
}

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0]);
    })
    .catch(err => {
        renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
        console.error(`${err} 💥💥💥`);
    })
}

getCountryData('montenegro', 'montenegro__data');

