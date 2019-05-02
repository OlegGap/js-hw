/*
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_url = "https://jsonplaceholder.typicode.com/users/";

form.addEventListener("submit", getUserById);

function getUserById(evt) {
  evt.preventDefault();
  fetchUser(input.value).then(makeViwe);
}
function fetchUser(id) {
  return fetch(API_url + Number(id))
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Такого користувача не існує");
    })
    .catch(e => e);
}
function makeViwe({ name, email, website, company }) {
  try {
    result.insertAdjacentHTML(
      "afterbegin",
      `
      <tr scope="row">
        <td>${name}</td>
        <td>${email}</td>
        <td>${website}</td>
        <td>${company.name}</td>
      </tr>
    `
    );
  } catch (e) {
    result.insertAdjacentHTML(
      "afterbegin",
      "<div>Такого користувача не існує</div>"
    );
    console.error("Такого id не існує");
  }
}
