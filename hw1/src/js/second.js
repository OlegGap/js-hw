"use strict";

const countPlase = +prompt("Сколько мест Вам нужно?");

let sharm = 15;
let hurgada = 25;
let taba = 6;
let checkCountPlase =
  countPlase === +null
    ? alert("Нам очень жаль, приходите еще!")
    : Number.isNaN(countPlase) || countPlase <= 0
    ? alert("Ошибка ввода")
    : "good";

if (checkCountPlase === "good") {
  if (countPlase <= Math.max(sharm, hurgada, taba)) {
    let confirmPlase = false;
    if (countPlase <= sharm) {
      confirmPlase = confirm(`Есть ${sharm} свободних меcт в групу Sharm, Ви согласни?`);
      if (confirmPlase) {
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
    if (!confirmPlase) {
      alert("Нам очень жаль, приходите еще!");
    }
  } else {
    alert("Извините, столько мест нет ни в одной группе!");
  }
}
