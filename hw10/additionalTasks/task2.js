/*
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://api.github.com/users/";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  fetchName(input.value);
}

function fetchName(name) {
  fetch(API_URL + name)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(res => {
      result.innerHTML = `<img src="${res.avatar_url}"></img><li>Login: ${
        res.login
      }</li><li>bio: ${res.bio}</li><li>public repos: ${res.public_repos}</li>`;
    })
    .catch(e => console.error("Erroe: ", e));
}
