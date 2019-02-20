/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/
const getPx = function(str) {
  let notStr = false;
  if (!(typeof str === "string")) {
    notStr = true;
  } else {
    str = str.split("");
    let pxStr = str.slice(-2);
    pxStr = pxStr.join("");
    if (pxStr === "px") {
      str.splice(-2);
    }
    str = str.join("");
    str = Number(str);
  }
  if (!notStr) {
    return str;
  } else {
    return null;
  }
};

// Вызовы функции для проверки
console.log(getPx("10px") === 10); // должно быть:  true
console.log(getPx("10.5") === 10.5); // должно быть:  true
console.log(getPx("0") === 0); // должно быть:  true
console.log(getPx(-1)); // должно быть:  null
console.log(getPx(10)); // должно быть:  null
