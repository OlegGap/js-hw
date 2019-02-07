"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

const login = prompt("Введите логин");
let checkLog = false;
if (login === null) {
  alert("Отменено пользователем!");
} else
  switch (login) {
    case adminLogin:
      checkLog = true;
      break;
    default:
      alert("Доступ запрещен, неверный логин!");
  }
if (checkLog) {
  let checkPas = false;
  const pas = prompt("Ведите пароль");
  if (pas === null) {
    alert("Отменено пользователем!");
  } else
    switch (pas) {
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
