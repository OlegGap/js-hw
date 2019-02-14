"use strict";

const countPlase = +prompt("Сколько мест Вам нужно?");

let sharm = 15;
let hurgada = 25;
let taba = 6;
let checkCountPlase = 
  countPlase === +null                              //користувач нажав Cancel --> очень жаль
    ? alert("Нам очень жаль, приходите еще!")       
    : Number.isNaN(countPlase) || countPlase <= 0   //введене значення не є числом або менше 0
    ? alert("Ошибка ввода")
    : "good";                                       //в іншому випадку все добре, значення коректне

if (checkCountPlase === "good") {                     //значення коректне-->
  if (countPlase <= Math.max(sharm, hurgada, taba)) { //введенне число менше-рівне за максимальне значення місць серед готелів--> 
    let confirmPlase = false;                         //створими змінну: місце заброньовано користувачем
    if (countPlase <= sharm) {                        //місць в першому готелі більше-рівно за введенне число--> Ви згідні 
      confirmPlase = confirm(`Есть ${sharm} свободних меcт в групу Sharm, Ви согласни?`);//не згідні-->вихід 
      if (confirmPlase) {                                                                //згідні-->Приємної подорожі 
        alert("Приятного путешествия в группе Sharm");
      }
    }
    if (!confirmPlase && countPlase <= hurgada) {
      confirmPlase = confirm(`Есть ${hurgada} свободних меcт в групу Hurgada, Ви согласни?`);
      if (confirmPlase) {
        alert("Приятного путешествия в группе Hurgada");
      }
    }
    if (!confirmPlase && countPlase <= taba) {
      confirmPlase = confirm(`Есть ${taba} свободних меcт в групу Taba, Ви согласни?`);
      if (confirmPlase) {
        alert("Приятного путешествия в группе Taba");
      }
    }
    if (!confirmPlase) {                             //місце не заброньовано-->шкода
      alert("Нам очень жаль, приходите еще!");
    }
  } else {                                          //введенне число більше за максимальне значення місць серед готелів 
    alert("Извините, столько мест нет ни в одной группе!");
  }
}
