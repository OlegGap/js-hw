/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener("click", hundleStartClick);
let intervalID;
let isCanWork = true;
let curentColorNum = 0;
function hundleStartClick({ target }) {
  if (isCanWork) {
    intervalID = setInterval(() => {
      target.style.backgroundColor = `${colors[curentColorNum]}`;
      curentColorNum++;
      if (curentColorNum == colors.length) curentColorNum = 0;
    }, 1000);
  }
  isCanWork = false;
}

stopBtn.addEventListener("click", hundleStopClick);

function hundleStopClick() {
  clearInterval(intervalID);
  isCanWork = true;
}
