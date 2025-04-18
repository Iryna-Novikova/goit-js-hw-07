function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let btnChngColorElem = document.querySelector('.change-color');
let colorElem = document.querySelector('.color');
let bodyElem = document.querySelector('body');

btnChngColorElem.addEventListener('click', () => { 
  let color = getRandomHexColor();
  colorElem.innerHTML = color;
  bodyElem.style.backgroundColor = color; 
})