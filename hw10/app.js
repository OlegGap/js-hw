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
const variables = {
  searchForm: document.querySelector(".search-byid"),
  searchInput: document.querySelector(".search-byid>input[name='id']"),
  addForm: document.querySelector(".add-user"),
  addInputName: document.querySelector(".add-user>input[name='name']"),
  addInputAge: document.querySelector(".add-user>input[name='age']"),
  removeForm: document.querySelector(".remove-byid"),
  removeInput: document.querySelector(".remove-byid>input[name='id']"),
  updateForm: document.querySelector(".update-byid"),
  updateInputId: document.querySelector(".update-byid>input[name='id']"),
  updateInputName: document.querySelector(".update-byid>input[name='name']"),
  updateInputAge: document.querySelector(".update-byid>input[name='age']"),
  showForm: document.querySelector(".show-users"),

  result: document.querySelector(".result")
};
const API_url = "https://test-users-api.herokuapp.com/users/";
variables.searchForm.addEventListener("submit", getUserById); //пошук користувача по ID
function getUserById(evt) {
  evt.preventDefault();
  fetchUserById(variables.searchInput.value).then(getUserByIdViwer);
  variables.searchInput.value = "";
}
function fetchUserById(id) {
  return fetch(API_url + id).then(res => res.json().catch(e => e));
}
function getUserByIdViwer({ data }) {
  try {
    variables.result.innerHTML = `      
        <div>User name: "${data.name}"</div>     
    `;
  } catch (e) {
    variables.result.innerHTML = "<div>Такого користувача не існує</div>";
    console.error("Такого id не існує");
  }
}

variables.addForm.addEventListener("submit", addUser); //додати нового користувача

function addUser(evt) {
  evt.preventDefault();
  fetch(API_url, {
    method: "POST",
    body: JSON.stringify({ name: variables.addInputName.value, age: variables.addInputAge.value }),
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
    variables.result.innerHTML = `      
    <div>Add user: name: "${user.data.name}" age: "${parseInt(
      user.data.age
    )}"</div>     
`;
    variables.addInputName.value = "";
    variables.addInputAge.value = "";
  } catch (e) {
    variables.result.innerHTML = "<div>Введені дані не вірні або не повні</div>";
    console.error("Не вірний формат");
  }
}

variables.removeForm.addEventListener("submit", removeUser); //видалити користувача по ID
function removeUser(evt) {
  evt.preventDefault();
  fetchRemoveUser(variables.removeInput.value).then(removeUserViwer);
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
    variables.result.innerHTML = `      
        <div>Користувача "${user.data.name}" видалено!</div>     
    `;
    variables.removeInput.value = "";
  } catch (e) {
    variables.result.innerHTML = "<div>Такого користувача не існує</div>";
    console.error("Такого id не існує");
  }
}

variables.updateForm.addEventListener("submit", updateUser); //оновити дані користувача по ID
function updateUser(evt) {
  evt.preventDefault();
  fetchUpadateUser(variables.updateInputId.value).then(updateUserViwer);
  variables.updateInputId.value = "";
}
function fetchUpadateUser(id) {
  return fetch(API_url + id, {
    method: "PUT",
    body: JSON.stringify({
      name: variables.updateInputName.value,
      age: variables.updateInputAge.value
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
    variables.result.innerHTML = `      
        <div>Користувача "${user.data.name}" оновлено!</div>     
    `;
    variables.updateInputName.value = "";
    variables.updateInputAge.value = "";
  } catch (e) {
    variables.result.innerHTML =
      "<div>Такого користувача не існує або введені дані не вірні</div>";
    console.error("Такого id не існує або введені дані не вірні");
  }
}

variables.showForm.addEventListener("submit", getAllUsers); //показати Name всіх користувачів

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
    (acc, user) => acc + `<li>Name: "${user.name}", age: "${user.age}", ID: "${user.id}"</li>`,
    ""
  );
  variables.result.innerHTML = htmlString;
}
