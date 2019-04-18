/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
const images = document.querySelector(".images");

images.addEventListener("click", handleImagesClick);

function handleImagesClick(event) {
  event.preventDefault();
  const target = event.target;
  console.log(target);
  if (target.nodeName !== "IMG") return;
  alert(target.src);
}
