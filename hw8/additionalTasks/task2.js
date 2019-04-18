/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector('button');
  const input = document.querySelectorAll('input');
  const result = document.querySelector('.result');
  
  button.addEventListener('click', hundleButtonClick);
  function hundleButtonClick(){
    result.textContent = parseInt(input[0].value) + parseInt(input[1].value) ;
  }
  
})

