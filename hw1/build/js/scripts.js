"use strict";

var adminLogin = "admin";
var adminPassword = "m4ngo1zh4ackz0r";
var login = prompt("Введите логин");
var checkLog = false;

if (login === null) {
  alert("Отменено пользователем!");
} else switch (login) {
  case adminLogin:
    checkLog = true;
    break;

  default:
    alert("Доступ запрещен, неверный логин!");
}

if (checkLog) {
  var checkPas = false;
  var pas = prompt("Ведите пароль");

  if (pas === null) {
    alert("Отменено пользователем!");
  } else switch (pas) {
    case adminPassword:
      checkPas = true;
      break;

    default:
      alert("Доступ запрещен, неверный пароль!");
  }

  if (checkPas) {
    alert("Добро пожаловать!");
  }
}
"use strict";

var countPlase = +prompt("Сколько мест Вам нужно?");
var sharm = 15;
var hurgada = 25;
var taba = 6;
var checkCountPlase = countPlase === +null ? alert("Нам очень жаль, приходите еще!") : Number.isNaN(countPlase) || countPlase <= 0 ? alert("Ошибка ввода") : "good";

if (checkCountPlase === "good") {
  if (countPlase <= Math.max(sharm, hurgada, taba)) {
    var confirmPlase = false;

    if (countPlase <= sharm) {
      confirmPlase = confirm("\u0415\u0441\u0442\u044C ".concat(sharm, " \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0438\u0445 \u043C\u0435c\u0442 \u0432 \u0433\u0440\u0443\u043F\u0443 Sharm, \u0412\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u0438?"));

      if (confirmPlase) {
        alert("Приятного путешествия в группе Sharm");
      }
    }

    if (!confirmPlase && countPlase <= hurgada) {
      confirmPlase = confirm("\u0415\u0441\u0442\u044C ".concat(hurgada, " \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0438\u0445 \u043C\u0435c\u0442 \u0432 \u0433\u0440\u0443\u043F\u0443 Hurgada, \u0412\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u0438?"));

      if (confirmPlase) {
        alert("Приятного путешествия в группе Hurgada");
      }
    }

    if (!confirmPlase && countPlase <= taba) {
      confirmPlase = confirm("\u0415\u0441\u0442\u044C ".concat(taba, " \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u0438\u0445 \u043C\u0435c\u0442 \u0432 \u0433\u0440\u0443\u043F\u0443 Taba, \u0412\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u0438?"));

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