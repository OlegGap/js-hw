/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
  const date = new Date();
  date.setTime(time);
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  minutes = String(minutes).length === 1 ? `0${minutes}` : minutes;
  seconds = String(seconds).length === 1 ? `0${seconds}` : seconds;
  milliseconds = parseInt(milliseconds / 100);
  return `${minutes}:${seconds}.${milliseconds}`;
}

console.log(getFormattedTime(1523621052858)); // 04:12.8

console.log(getFormattedTime(1523621161159)); // 06:01.1

console.log(getFormattedTime(1523621244239)); // 07:24.2
