const movies = document.querySelector('.movie');

const card = document.createElement('div');
const movie__image = document.createElement('img');
movie__image.classList.add('movie__image');
movie__image.setAttribute('src','http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');
movie__image.setAttribute('alt','movie image');
card.append(movie__image);
const movie__body =document.createElement('div');

const movie__title =document.createElement('h2');
movie__title.classList.add('movie__title');
movie__title.textContent='The Godfather';
movie__body.append(movie__title);

const movie__description =document.createElement('p');
movie__description.classList.add('movie__description');
movie__description.textContent='Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the      would-be killers, launching a campaign of bloody revenge.';
movie__body.append(movie__description);

const movie__date =document.createElement('p');
movie__date.classList.add('movie__date');
movie__date.textContent='Released: 1972-03-14';
movie__body.append(movie__date);

const movie__rating =document.createElement('p');
movie__rating.classList.add('movie__rating');
movie__rating.textContent='Rating: 8.6';
movie__body.append(movie__rating);

card.append(movie__body);
movies.append(card); 


/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/