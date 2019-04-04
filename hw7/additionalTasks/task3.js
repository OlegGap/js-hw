/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ["HTML", "CSS", "JavaScript", "React", "Node"];

const list = document.querySelector(".list");
const items = [];

elements.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  items.push(li);
});
  
