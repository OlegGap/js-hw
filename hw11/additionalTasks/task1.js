/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 *
 * Создай шаблон элемента списка указаного на вкладке HTML.
 * Отрендери список в DOM по данным из массива products.
 */

const products = [
  { name: "Apples", quantity: 50 },
  { name: "Grapes", quantity: 44 },
  { name: "Cheese", quantity: 128 },
  { name: "Milk", quantity: 93 }
];

const source = document.querySelector("#item-template").innerHTML.trim();
const template = Handlebars.compile(source);

const markup = products.reduce(
  (acc, product) => (acc += template(product)),
  ""
);
const productsContainer = document.querySelector(".products");
productsContainer.innerHTML = markup;

