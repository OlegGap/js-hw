/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

class Stopwatch {
  constructor({ parentNode }) {
    this.parentNode = parentNode;
    this.intervalID = null;
    this.startMoment = null;
    this.time = 0;
    this.lastTime = 0;
    this.clockface, this.startBtn, this.lapBtn, this.resetBtn, this.lapsList; //DOMелементи таймера
  }
  run() {
    this.parentNode.insertAdjacentHTML(
      "afterbegin",
      `<div class="stopwatch">
        <p class="time js-time">00:00.0</p>
        <button class="btn js-start js-stop">Start</button>
        <button class="btn js-take-lap">Lap</button>
        <button class="btn js-reset">Reset</button>
     </div>
    <ul class="laps js-laps"></ul>
      </div>`
    );
    this.clockface = this.parentNode.querySelector(".js-time");
    this.startBtn = this.parentNode.querySelector(".js-start");
    this.lapBtn = this.parentNode.querySelector(".js-take-lap");
    this.resetBtn = this.parentNode.querySelector(".js-reset");
    this.lapsList = this.parentNode.querySelector(".js-laps");

    this.startBtn.addEventListener("click", this.startTimer.bind(this));
    this.lapBtn.addEventListener("click", this.lap.bind(this));
    this.resetBtn.addEventListener("click", this.reset.bind(this));
  }
  startTimer({ target }) {
    target.classList.add("active");
    if (target.textContent.toLowerCase() === "pause") {
      this.pause();
    } else {
      this.start();
    }
  }
  start() {
    this.startBtn.textContent = "Pause";
    this.startMoment = moment();    //час запуску
    this.intervalID = setInterval(() => {
      let currentMoment = moment(); //поточний момент
      this.time =
        currentMoment.valueOf() - this.startMoment.valueOf() + this.lastTime; //пройдений час
      this.updateClockface(this.clockface, this.time);
    }, 100);
  }
  pause() {
    this.startBtn.classList.remove("active");
    this.lastTime = this.time;      //збережемо час, який пройшов
    this.startBtn.textContent = "Continue";
    clearInterval(this.intervalID); //зупинимо таймер
  }
  lap() {
    const elem = document.createElement("li");
    this.updateClockface(elem, this.time);
    this.lapsList.append(elem);
  }
  reset() {
    this.lastTime = 0;
    this.time = 0;
    this.startMoment = moment();
    this.updateClockface(this.clockface, this.time);
  }
  updateClockface(elem, time) {
    elem.textContent = moment(time).format("mm:ss.S");
  }
}

const stopwatch = new Stopwatch({
  parentNode: document.querySelector(".wraper")
});
stopwatch.run();

const stopwatch2 = new Stopwatch({
  parentNode: document.querySelector(".wraper2")
});
stopwatch2.run();

// const stopwatch3 = new Stopwatch({
//   parentNode: document.querySelector(".wraper3")
// });
// stopwatch3.run();
/*
    ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
    
    Выполните домашнее задание используя класс с полями и методами.
    
    На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
    динамически создана вся разметка для секундомера.
    
    Должна быть возможность создать сколько угодно экземпляров секундоментов 
    на странице и все они будут работать независимо.
    
    К примеру:
    
    new Stopwatch(parentA);
    new Stopwatch(parentB);
    new Stopwatch(parentC);
    
    Где parent* это существующий DOM-узел. 
  */
