/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

function findLongestWord(str) {
  correctValue = true;
  if (typeof str !== "string") {
    correctValue = false;
  }
  if (!correctValue) {
    return `Error, is't correct argument`;
  } else {
    str = str.split(" ");
    let valueLongestWord = 0,
      longestWord;
    for (const element of str) {
      if (element.length > valueLongestWord) {
        valueLongestWord = element.length;
        longestWord = element;
      }
    }
    return longestWord;
  }
}

// Вызовы функции для проверки
console.log(findLongestWord("The quick brown fox 55 jumped over the lazy dog")); // вернет 'jumped'
console.log(findLongestWord(null));
console.log(findLongestWord("Google do a roll")); // вернет 'Google'

console.log(findLongestWord("May the force be with you")); // вернет 'force'
