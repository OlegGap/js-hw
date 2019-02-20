/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers  = [2, 1, 4, 9];

function addUniqueNumbers(){
    const  max = arguments.length;
    const lenghtUniqueNumbers = uniqueNumbers.length;
    let isUnique;
    for(let i = 0; i < max; i++){
        isUnique = true;
        for(let j = 0; j < lenghtUniqueNumbers; j++){
            if(arguments[i]===uniqueNumbers[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniqueNumbers.push(arguments[i]);
        }
    }
}

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]