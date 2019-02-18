"use strict";

const countPlace = +prompt("Сколько мест Вам нужно?");

const sharm = 15,
      hurgada = 25,
      taba = 6;


const askFreePalce = (place, name) => {
  let confirmPlace = confirm(`Есть ${place} свободних меcт в групу ${name}, Ви согласни?`);
  return confirmPlace;
}
const confirmedCurort = (name) => {
  alert(`Приятного путешествия в группе ${name}`);
}

let checkCountPlace = 
  countPlace === +null                                //користувач нажав Cancel --> очень жаль
    ? alert("Нам очень жаль, приходите еще!")       
    : Number.isNaN(countPlace) || countPlace <= 0     //введене значення не є числом або менше 0 --> ошибка
    ? alert("Ошибка ввода")
    : "good";                                         //в іншому випадку все добре, значення коректне

if (checkCountPlace === "good") {                     //значення коректне-->
  if (countPlace <= Math.max(sharm, hurgada, taba)) { //введенне число менше-рівне за максимальне значення місць серед готелів--> 
    let confirmPlace = false;                         //створими змінну-прапорець: місце заброньовано користувачем?
    if (countPlace <= sharm) {                        //місць в першому готелі більше-рівно за введенне число--> Ви згідні 
      confirmPlace = askFreePalce(sharm, `Sharm`);    //не згідні-->вихід 
      if (confirmPlace) {                             //згідні-->Приємної подорожі 
        confirmedCurort(`Sharm`);
      }
    }
    if (!confirmPlace && countPlace <= hurgada) {
      confirmPlace = askFreePalce(hurgada, `Hurgada`);
      if (confirmPlace) {
        confirmedCurort(`Hurgada`);
      }
    }
    if (!confirmPlace && countPlace <= taba) {
      confirmPlace = askFreePalce(taba, `Taba`);
      if (confirmPlace) {
        confirmedCurort(`Taba`);
      }
    }
    if (!confirmPlace) {                             //місце не заброньовано--> очень жаль
      alert("Нам очень жаль, приходите еще!");
    }
  } else {                                           //введенне число більше за максимальне значення місць серед готелів 
    alert("Извините, столько мест нет ни в одной группе!");
  }
}
