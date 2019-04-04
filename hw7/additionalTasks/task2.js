/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

const elements= document.querySelector('.list');
 

elements.firstElementChild.style.color="red";
elements.lastElementChild.style.color="blue";