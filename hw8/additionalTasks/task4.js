/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const options = document.getElementsByName("option");
  const result = document.querySelector(".result");

  form.addEventListener("submit", hundleButtonClick);

  function hundleButtonClick(event) {
    options.forEach(el => {
      if (el.checked) {
        result.textContent = `Result:${el.nextSibling.textContent}`;
      }
    });
    event.preventDefault();
  }
});
