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
const tryLocalStorage = (w => {
  if (!w) return;

  const isActive = 'localStorage' in w;

  const get = key => {
    try {
      const serializedState = localStorage.getItem(key);

      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (err) {
      console.error('Get state error: ', err);
    }
  };

  const set = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error('Set state error: ', err);
    }
  };

  const publicAPI = {
    isActive,
    get,
    set,
  };

  return publicAPI;
})(window);

let cards = [
  {
    url: 'demo',
    'logo-url': 'https://www.freelogodesign.org/Content/img/logo-ex-7.png',
  },
];
if (tryLocalStorage.get('cardsData')) {
  cards = tryLocalStorage.get('cardsData');
}

const form = document.querySelector('.js-form');
let input = document.querySelector('input');
let inputValue;
const result = document.querySelector('.result-list');
const source = document.querySelector('#template-container').innerHTML.trim();
const template = Handlebars.compile(source);
let markup;
cardsViwer();

form.addEventListener('submit', formSubmitClick);

function formSubmitClick(evt) {
  inputValue = input.value;
  input.value = '';
  evt.preventDefault();
  addNewItem();
}

function addNewItem() {
  const checkURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (cards.some(elem => inputValue === elem.url)) {
    alert('Така закладка вже існує!');
  } else if (!checkURL.test(inputValue)) {
    alert('Не вірний формат!');
  } else {
    fetchGetImage(inputValue).then(res => {
      cards.push({ url: inputValue, 'logo-url': res }), cardsViwer();
      tryLocalStorage.set('cardsData', cards);
    });
  }
}

function fetchGetImage(url) {
  const data = {
    key: '5cd40f3bec0e35c20a74cf61b9b1d52cacfe039b93914',
    q: url,
  };

  return fetch(`http://api.linkpreview.net/?key=${data.key}&q=${data.q}`)
    .then(res => res.json())
    .then(response => response.image)
    .catch(e=>console.error(e))
}

result.addEventListener('click', deleteResultClick);

function deleteResultClick({ target }) {
  if (target.nodeName === 'BUTTON') {
    cards = cards.filter(
      elem => target.parentNode.firstChild.innerHTML != elem.url,
    );
    cardsViwer();
    tryLocalStorage.set('cardsData', cards);
  } else {
    return;
  }
}

function cardsViwer() {
  markup = cards.reduce((acc, el) => (acc += template(el)), '');
  result.innerHTML = markup;
}