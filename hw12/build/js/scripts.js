"use strict";

/* 
  Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 
  
  Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
      создания списка карточек. Форма уже есть в HTML при загрузке страницы.
      
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
          всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
          добавляется в коллекцию.
          
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
      на кнопку происходит удаление.
      
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
      все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
      
  🔔 Оформление интерфейса произвольное
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
      на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
      диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
      регулярные выражения для валидации url.
          
    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
      для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/
var tryLocalStorage = function (w) {
  if (!w) return;
  var isActive = 'localStorage' in w;

  var get = function get(key) {
    try {
      var serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (err) {
      console.error('Get state error: ', err);
    }
  };

  var set = function set(key, value) {
    try {
      var serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error('Set state error: ', err);
    }
  };

  var publicAPI = {
    isActive: isActive,
    get: get,
    set: set
  };
  return publicAPI;
}(window);

var cards = [{
  url: 'demo',
  'logo-url': 'https://www.freelogodesign.org/Content/img/logo-ex-7.png'
}];

if (tryLocalStorage.get('cardsData')) {
  cards = tryLocalStorage.get('cardsData');
}

var elements = {
  form: document.querySelector('.js-form'),
  input: document.querySelector('input'),
  result: document.querySelector('.result-list'),
  source: document.querySelector('#template-container').innerHTML.trim()
};
var inputValue;
var template = Handlebars.compile(elements.source);
cardsViewer();
elements.form.addEventListener('submit', formSubmitClick);

function formSubmitClick(evt) {
  inputValue = elements.input.value;
  elements.input.value = '';
  evt.preventDefault();
  addNewItem();
}

function addNewItem() {
  var checkURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  if (cards.some(function (elem) {
    return inputValue === elem.url;
  })) {
    alert('Така закладка вже існує!');
  } else if (!checkURL.test(inputValue)) {
    alert('Не вірний формат!');
  } else {
    fetchGetImage(inputValue).then(function (res) {
      cards.push({
        url: inputValue,
        'logo-url': res
      }), cardsViewer();
      tryLocalStorage.set('cardsData', cards);
    });
  }
}

function fetchGetImage(url) {
  var data = {
    key: '5cd40f3bec0e35c20a74cf61b9b1d52cacfe039b93914',
    q: url
  };
  return fetch("https://api.linkpreview.net/?key=".concat(data.key, "&q=").concat(data.q)).then(function (res) {
    return res.json();
  }).then(function (response) {
    return response.image;
  }).catch(function (e) {
    return console.error(e);
  });
}

elements.result.addEventListener('click', deleteResultClick);

function deleteResultClick(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    cards = cards.filter(function (elem) {
      return evt.target.parentNode.firstChild.innerHTML != elem.url;
    });
    cardsViewer();
    tryLocalStorage.set('cardsData', cards);
  } else {
    return;
  }
}

function cardsViewer() {
  var markup = cards.reduce(function (acc, el) {
    return acc += template(el);
  }, '');
  elements.result.innerHTML = markup;
}