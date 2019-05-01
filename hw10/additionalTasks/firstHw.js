const clockface = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");
const lapsList = document.querySelector(".js-laps");

let intervalID;
let startMoment;
let time;
let lastTime = 0;

startBtn.addEventListener("click", startTimer);

function startTimer({ target }) {
  startBtn.removeEventListener("click", startTimer); //цей івент використовуємо один раз
  startBtn.textContent = "Pause";
  startMoment = moment(); //час першого запуску
  intervalID = setInterval(() => {
    let currentMoment = moment(); //поточний момент
    time = currentMoment.valueOf() - startMoment.valueOf() + lastTime; //пройдений час
    updateClockface(clockface, time);
    startBtn.addEventListener("click", stopTimer); //якщо знову нажимаємо на кнопку
  }, 100);
}

function stopTimer({ target }) {
  startBtn.removeEventListener("click", stopTimer);
  lastTime = time; //збережемо час, який пройшов
  startBtn.textContent = "Continue";
  clearInterval(intervalID); //зупинимо таймер
  startBtn.addEventListener("click", startTimer); //можемо запустити таймер
}

lapBtn.addEventListener("click", lapTimer);

function lapTimer() {
  const elem = document.createElement("li");
  updateClockface(elem, time);
  lapsList.append(elem);
}

resetBtn.addEventListener("click", resetTimer);

function resetTimer() {
  lastTime = 0;
  time = 0;
  startMoment = moment();
  updateClockface(clockface, time);
}

function updateClockface(elem, time) {
  elem.textContent = moment(time).format("mm:ss.S");
}