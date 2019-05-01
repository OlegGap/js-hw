/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

startBtn.addEventListener("click", startTimer);
let intervalID;
let isCanWork = true;
let startDate = new Date();
function startTimer({ target }) {
  setActiveBtn(target);
  if (isCanWork) {
    intervalID = setInterval(() => {
      let curentDate = new Date();
      updateClockface(clockface, curentDate.getTime() - startDate.getTime());
    }, 100);
  }
  isCanWork = false;
}

stopBtn.addEventListener("click", stopTimer);

function stopTimer({ target }) {
  setActiveBtn(target);
  clearInterval(intervalID);
  isCanWork = true;
}

/*
 * Вспомогательные функции
 */

/*
 * Обновляет поле счетчика новым значением при вызове
 * аргумент time это кол-во миллисекунд
 */
function updateClockface(elem, time) {
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
  elem.textContent = getFormattedTime(time);
}

/*
 * Подсветка активной кнопки
 */
function setActiveBtn(target) {
  if (target.classList.contains("active")) {
    return;
  }

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  target.classList.add("active");
}
