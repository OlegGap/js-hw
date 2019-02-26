/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/
function isObjectEmpty(obj){
  const objArr = Object.keys(obj);
  console.log(objArr);
  return objArr.length === 0;
}
// Вызовы функции для проверки
console.log(
  isObjectEmpty({})
); // true

console.log(
  isObjectEmpty({a: 1})
); // false

console.log(
  isObjectEmpty({a: 1, b: 2})
); // false
