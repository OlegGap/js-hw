
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

// const stopwatch2 = new Stopwatch({
//   parentNode: document.querySelector(".wraper2")
// });
// stopwatch2.run();

// const stopwatch3 = new Stopwatch({
//   parentNode: document.querySelector(".wraper3")
// });
// stopwatch3.run();
