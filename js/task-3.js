let inputNameElem = document.querySelector('#name-input');

let outputNameElem = document.querySelector('#name-output');

function printName(event) {
    const inputName = event.currentTarget.value.trim();  
    if (inputName === '') {
        outputNameElem.textContent = 'Anonymous';
    } else outputNameElem.textContent = inputName;
}

inputNameElem.addEventListener('input', printName);