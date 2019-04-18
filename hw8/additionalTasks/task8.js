/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const message = document.querySelector('.message');
const input = document.querySelector('.input');
const inputVal = document.querySelector('.input-value');

input.addEventListener('focus', handleInputFocus);

function handleInputFocus({target}){
  message.textContent='Input is in focus!';
}

input.addEventListener('blur', handleInputBlur);

function handleInputBlur({target}){
  message.textContent='';
}

input.addEventListener('input', handleInputChange);

function handleInputChange({target}){
  inputVal.textContent= 'Current input value:' +target.value;
  console.log(target.value)
}
