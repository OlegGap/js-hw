/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
class Counter {
  constructor(onChange) {
    this.onChange = onChange;
  }

  increment() {
    this.onChange++;
    console.log(this.onChange);
    return this.onChange;
  }
  decrement() {
    this.onChange--;
    console.log(this.onChange);
    return this.onChange;
  }
}

const value = document.querySelector(".value");
const btn = document.querySelectorAll(".btn");

const counter = new Counter(value.textContent);
btn[0].addEventListener("click", () => {
  value.textContent = counter.decrement();
});
btn[1].addEventListener("click", () => {
  value.textContent = counter.increment();
});
