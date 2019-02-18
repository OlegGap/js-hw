"use strict";

const adminLogin = "admin";
const adminPassword = "m4ngo1zh4ackz0r";

const login = prompt("Введите логин");  //введнення логіну
let checkLog = false;
if (login === null) {                   //нажато Cancel --> відмінено
  alert("Отменено пользователем!");
} else                                  // перевіряємо введений логін з дійсним логіном
  switch (login) {               
    case adminLogin:                    //логін співпав --> доступ дозволенно по логіну
      checkLog = true;
      break;
    default:
      alert("Доступ запрещен, неверный логин!"); //логін не співпав --> доступ заборонено
  }
if (checkLog) {
  let checkPas = false;                 //доступ по логіну дозволенно --> повідомлення ввести пароль
  const pas = prompt("Ведите пароль");
  if (pas === null) {                   //нажато Cancel --> відмінено
    alert("Отменено пользователем!");
  } else
    switch (pas) {                      //пароль співпав --> доступ дозволенно
      case adminPassword:
        checkPas = true;
        break;
      default:
        alert("Доступ запрещен, неверный пароль!");//пароль не співпав --> доступ заборонено
    }
  if (checkPas) {                       //доступ дозволенно --> вітання
    alert("Добро пожаловать!");
  }
}

