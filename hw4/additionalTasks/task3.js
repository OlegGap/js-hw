/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

function countProps(obj) {
  let count = 0;
  for (key in obj) {
    count++;
  }
  return count;
}

// Вызовы функции для проверки
console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 3, c: "hello" })); // 3
