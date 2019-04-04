/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-1.com"
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-2.com"
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: "link-3.com"
  }
];

function createPostCard(post) {
  const card = document.createElement("div");
  card.classList.add("card-container");

  const movie__image = document.createElement("img");
  movie__image.classList.add("movie__image");
  movie__image.setAttribute("src", `${post.img}`);
  movie__image.setAttribute("alt", "movie image");
  card.append(movie__image);

  const movie__body = document.createElement("div");

  const movie__title = document.createElement("h2");
  movie__title.classList.add("movie__title");
  movie__title.textContent = `${post.title}`;
  movie__body.append(movie__title);

  const movie__description = document.createElement("p");
  movie__description.classList.add("movie__description");
  movie__description.textContent = `${post.text}`;
  movie__body.append(movie__description);

  const movie__date = document.createElement("p");
  movie__date.classList.add("movie__date");
  movie__date.textContent = "Released: yyyy-mm-dd";
  movie__body.append(movie__date);

  const movie__rating = document.createElement("p");
  movie__rating.classList.add("movie__rating");
  movie__rating.textContent = "Rating: 0.0";
  movie__body.append(movie__rating);

  card.append(movie__body);
  return card;
}

const cards = [];
function createCards(posts) {
  posts.map(item => cards.push(createPostCard(item)));
}
createCards(posts);

const movies = document.querySelector(".movie");
movies.append(...cards);
