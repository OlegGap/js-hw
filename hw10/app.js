/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/

const searchForm = document.querySelector(".search-byid");
const searchInput = document.querySelector(".search-byid>input[name='id']");
const addForm = document.querySelector(".add-user");
const addInputName = document.querySelector(".add-user>input[name='name']");
const addInputAge = document.querySelector(".add-user>input[name='age']");
const removeForm = document.querySelector(".remove-byid");
const removeInput = document.querySelector(".remove-byid>input[name='id']");
const updateForm = document.querySelector(".update-byid");
const updateInputId = document.querySelector(".update-byid>input[name='id']");
const updateInputName = document.querySelector(
  ".update-byid>input[name='name']"
);
const updateInputAge = document.querySelector(".update-byid>input[name='age']");
const showForm = document.querySelector(".show-users");

const result = document.querySelector(".result");
const API_url = "https://test-users-api.herokuapp.com/users/";

searchForm.addEventListener("submit", getUserById); //пошук користувача по ID
function getUserById(evt) {
  evt.preventDefault();
  fetchUserById(searchInput.value).then(getUserByIdViwer);
  searchInput.value = "";
}
function fetchUserById(id) {
  return fetch(API_url + id).then(res => res.json().catch(e => e));
}
function getUserByIdViwer({ data }) {
  try {
    result.innerHTML = `      
        <div>User name: "${data.name}"</div>     
    `;
  } catch (e) {
    result.innerHTML = "<div>Такого користувача не існує</div>";
    console.error("Такого id не існує");
  }
}

addForm.addEventListener("submit", addUser); //додати нового користувача

function addUser(evt) {
  evt.preventDefault();
  fetch(API_url, {
    method: "POST",
    body: JSON.stringify({ name: addInputName.value, age: addInputAge.value }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(addUserViwer)
    .catch(e => e);
}
function addUserViwer(user) {
  try {
    result.innerHTML = `      
    <div>Add user: name: "${user.data.name}" age: "${parseInt(
      user.data.age
    )}"</div>     
`;
    addInputName.value = "";
    addInputAge.value = "";
  } catch (e) {
    result.innerHTML = "<div>Введені дані не вірні або не повні</div>";
    console.error("Не вірний формат");
  }
}

removeForm.addEventListener("submit", removeUser); //видалити користувача по ID
function removeUser(evt) {
  evt.preventDefault();
  fetchRemoveUser(removeInput.value).then(removeUserViwer);
}
function fetchRemoveUser(id) {
  return fetch(API_url + id, {
    method: "DELETE"
  })
    .then(res => res.json())
    .catch(e => e);
}
function removeUserViwer(user) {
  try {
    result.innerHTML = `      
        <div>Користувача "${user.data.name}" видалено!</div>     
    `;
    removeInput.value = "";
  } catch (e) {
    result.innerHTML = "<div>Такого користувача не існує</div>";
    console.error("Такого id не існує");
  }
}

updateForm.addEventListener("submit", updateUser); //оновити дані користувача по ID
function updateUser(evt) {
  evt.preventDefault();
  fetchUpadateUser(updateInputId.value).then(updateUserViwer);
  updateInputId.value = "";
}
function fetchUpadateUser(id) {
  return fetch(API_url + id, {
    method: "PUT",
    body: JSON.stringify({
      name: updateInputName.value,
      age: updateInputAge.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .catch(e => e);
}
function updateUserViwer(user) {
  try {
    result.innerHTML = `      
        <div>Користувача "${user.data.name}" оновлено!</div>     
    `;
    updateInputName.value = "";
    updateInputAge.value = "";
  } catch (e) {
    result.innerHTML =
      "<div>Такого користувача не існує або введені дані не вірні</div>";
    console.error("Такого id не існує або введені дані не вірні");
  }
}

showForm.addEventListener("submit", getAllUsers); //показати Name всіх користувачів

function getAllUsers(evt) {
  evt.preventDefault();
  fetchAllUsers().then(getAllUsersViwer);
}
function fetchAllUsers() {
  return fetch(API_url)
    .then(res => {
      if (res.ok) return res.json();
    })
    .catch(e => e);
}
function getAllUsersViwer(users) {
  const htmlString = users.data.reduce(
    (acc, user) => acc + `<li>Name: "${user.name}", age: "${user.age}"</li>`,
    ""
  );
  result.innerHTML = htmlString;
}
