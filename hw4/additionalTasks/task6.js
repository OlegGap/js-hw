/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
function getAllPropValues(arr, prop){

  let arrResult = []; 
  for(let i = 0; i < arr.length; i++){
      if(users[i].hasOwnProperty(prop)){
      arrResult.push(users[i][prop]);
      }
  }
  return arrResult;
}
const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful'},
  { name: 'Ajax', age: 3, mood: 'tired' }
];

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active')
); // []