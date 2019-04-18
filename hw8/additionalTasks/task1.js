/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('.button');
      button.addEventListener('click', hundleButtonClick);
      function hundleButtonClick({target}){
        target.textContent++;
      }
    });