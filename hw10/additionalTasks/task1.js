/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);

/*
  @param {FormEvent} evt
*/

function fetchCountryData(evt) {
  evt.preventDefault();
  console.log(input.value);
  fetchCountry(input.value);
}

function fetchCountry(country) {
  fetch(API_URL + country)
    .then(res => res.json())
    .then(res => {
      result.innerHTML = `<div><li>${res[0].name}</li><li>${
        res[0].capital
      }</li><li>${res[0].cioc}</li><li>${res[0].flag}</li></div>`;
    })
    .catch(err => console.error("Error: " + err));
}
