/*
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/

const form = document.querySelector(".search-form");
const userTable = document.querySelector(".users-table");

form.addEventListener("submit", fetchUsers);

/*
  @param {FormEvent} evt
*/

function fetchUserData() {
  return fetch("https://jsonplaceholder.typicode.com/users/")
    .then(res => res.json())
    .catch(e => e);
}
function fetchUsers(evt) {
  evt.preventDefault();
  fetchUserData().then(updateViwe);
}
function updateViwe(content) {
  const htmlString = content.reduce(
    (acc, cont) => acc + createTableRow(cont),
    ""
  );
  userTable.innerHTML = htmlString;
}

function createTableRow({ name, email, address, website, company }) {
  return `
    <tr scope="row">
      <td>${name}</td>
      <td>${email}</td>
      <td>${address.city}</td>
      <td>${website}</td>
      <td>${company.name}</td>
    </tr>
  `;
}
