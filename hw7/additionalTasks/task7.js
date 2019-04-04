/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
const root = document.querySelector("#root");
function createBoxes(num) {
  const divs = [];
  let divSize = 30;
  for (let i = 0; i < num; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(`div${i + 1}`);
    divs.push(newDiv);
    console.log(newDiv);
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newDiv.style.background = `rgb(${r},${g},${b})`;
    newDiv.style.height = `${divSize}px`;
    newDiv.style.width = `${divSize}px`;
    divSize += 10;
  }
  return divs;
}
root.append(...createBoxes(10));
