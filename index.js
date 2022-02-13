const url = 'https://type.fit/api/quotes';
const btn = document.querySelector('.quote-btn');
const text = document.querySelector('.text');
const author = document.querySelector('.author');
const header = document.querySelector('.header');
const year = document.querySelector('.year-author');
const footer = document.querySelector('.footer__link');
const icon = document.querySelector('.icon-rss');

function getRandomColorTriplet() {
   const randomColorRGB = () => Math.round(255*Math.random()).toString(16); // STRING '132'
   const colorTriplet = randomColorRGB() + randomColorRGB() + randomColorRGB();
   return `#${colorTriplet}`;
}

function changeColorTheme() {
   const colorTriplet = getRandomColorTriplet();
   
   header.style.background = colorTriplet;
   btn.style.background = colorTriplet;
   year.style.color = colorTriplet;
   footer.style.color = colorTriplet;
   icon.style.fill = colorTriplet;
}


async function getData() {
   const res = await fetch(url);
   const data = await res.json();
   const randomNumber = Math.floor(Math.random()*data.length);
   text.textContent = data[randomNumber].text;
   author.textContent = data[randomNumber].author;
   btn.addEventListener('click', () => {
      const randomNumber = Math.floor(Math.random()*data.length);
      text.textContent = data[randomNumber].text;
      author.textContent = data[randomNumber].author;
      changeColorTheme();
   })
}
getData();

/* rus quotes */

async function getQuotes() {  
   const quotes = 'data.json';
   const res = await fetch(quotes);
   const data = await res.json(); 
   const randomNumber = Math.floor(Math.random()*data.length);
   text.textContent = data[randomNumber].text;
   author.textContent = data[randomNumber].author;
   btn.addEventListener('click', () => {
      const randomNumber = Math.floor(Math.random()*data.length);
      text.textContent = data[randomNumber].text;
      author.textContent = data[randomNumber].author;
      changeColorTheme();
})
}
getQuotes();


/* translate pages */

const langs = document.querySelector('.lang-btns'); 
const enBtn = document.querySelector('.lang-btn-en');
const ruBtn = document.querySelector('.lang-btn-ru');
let lang;

function translateQuotes() {
   langs.addEventListener('click', (event) => {
      langs.querySelectorAll('.lang-btn').forEach(el => el.classList.remove('active'));
      event.target.classList.add('active');
      if (enBtn.classList.contains('active')) {
         lang = 'en';
         console.log(lang);
         getData();       
      } else if (ruBtn.classList.contains('active')) {
         lang = 'ru';
         console.log(lang);
         getQuotes();
      }
   });
};
translateQuotes();

/* local storage */



function setLocalStorage() {
   localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
      localStorage.getItem('lang');
      console.log(456);
      translateQuotes();
}
window.addEventListener('load', getLocalStorage);

