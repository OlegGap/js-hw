/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector(".menu");
menu.addEventListener("click", handleMenuClick);

function handleMenuClick({ target }) {
  if (target.nodeName == "UL") return;
  const currentActiveLink = menu.querySelector("a.active");

  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }

  target.classList.add("active");
}
