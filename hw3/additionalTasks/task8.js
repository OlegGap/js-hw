/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

const filterFromArray = function(arr) {
  let newArr = [];
  for (let j = 0; j < arr.length; j++) {
    let isUnique = true;
    for (let i = 0; i < arguments.length; i++) {
      if (arr[j] === arguments[i]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      newArr.push(arr[j]);
    }
  }
  return newArr;
};

// Вызовы функции для проверки
console.log(
filterFromArray([1, 2, 3, 4, 5], 2, 4)); // [1, 3, 5]

console.log(filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)); // [12, 8, 17]
