const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const inputs = document.querySelectorAll("input[type='checkbox']");
const checkboxColor = document.querySelector(".checkbox-color");
const checkboxYear = document.querySelector(".checkbox-year");
const form = document.querySelector(".js-form");
const cardsContainer = document.querySelector(".card");
const source = document.querySelector("#template-container").innerHTML.trim();
const template = Handlebars.compile(source);
let markup = laptops.reduce((acc, el) => (acc += template(el)), ""); //виведе всі карточки при завантажені
cardsContainer.innerHTML = markup;


form.addEventListener("submit", formClickEvt);
let filter;
function formClickEvt(evt) {
  evt.preventDefault();
  filter = takeChecked(inputs);
  markup = laptops.reduce(laptopsFilter, "");
  cardsContainer.innerHTML = markup;
}

function takeChecked(inputs) {
  const filter = { size: [], color: [], release_date: [] };
  Object.keys(inputs).forEach(i => {
    if (inputs[i].name === "size" && inputs[i].checked) { //записуємо в масив значення вибраного розміру
      filter.size.push(inputs[i].value);
    }
    if (inputs[i].name === "color" && inputs[i].checked) {
      filter.color.push(inputs[i].value);
    }
    if (inputs[i].name === "release_date" && inputs[i].checked) {
      filter.release_date.push(inputs[i].value);
    }
  });
  return filter;
}

function laptopsFilter(acc, post) {
  if (
    (post.size == filter.size[0] || //якщо розмір в пості співпаде
    post.size == filter.size[1] || //з вибраним розміро - пропускаємо(виводимо)
      post.size == filter.size[2] ||
      filter.size.length == 0) && //якщо нічого не вибрано з розділу SIZE
    (post.color == filter.color[0] ||
      post.color == filter.color[1] ||
      post.color == filter.color[2] ||
      filter.color.length == 0) &&
    (post.release_date == filter.release_date[0] ||
      post.release_date == filter.release_date[1] ||
      post.release_date == filter.release_date[2] ||
      filter.release_date.length == 0)
  ) {
    acc += template(post);
  }
  return acc;
}


// function getArrayCheckedInputs() {
//   return Array.from(
//     form.querySelectorAll('input[type="checkbox"]:checked')
//   );
// };

// form.addEventListener('submit', formClickEvt);
// function formClickEvt(evt){
//   evt.preventDefault();
//   let arr = getArrayCheckedInputs();
//   console.log(arr);
//  arr = arr.reduce((acc, elem) => {
//   acc[elem.name]
//     ? acc[elem.name].push(elem.value)
//     : (acc[elem.name] = [elem.value]);
//   return acc;
// }, {});
// console.log(arr);
// const res = Object.keys(arr).reduce(
//   (a, e) => a.filter(elem => arr[e].includes("" + elem[e])),
//   laptops
// );
// console.log(res);
// }