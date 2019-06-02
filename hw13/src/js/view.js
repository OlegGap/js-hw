import EventEmitter from "../services/event-emitter";

export default class View extends EventEmitter {
  constructor() {
    super();

      this.form = document.querySelector(".js-form"),
      this.input = document.querySelector("input"),
      this.result = document.querySelector(".result-list"),
      this.source = document
        .querySelector("#template-container")
        .innerHTML.trim(),
      this.inputValue,
      this.template = Handlebars.compile(this.source);

    this.form.addEventListener("submit", this.formSubmitClick.bind(this));
    this.result.addEventListener("click", this.deleteResultClick.bind(this));
  }

  formSubmitClick(evt) {
    evt.preventDefault();
    this.inputValue = this.input.value;
    this.input.value = "";
    this.emit("add", this.inputValue);
  }

  addCard(cards) {
    if (cards == "notCorect") {
      alert("Не вірний формат!");
    } else if (cards == "haveIt") {
      alert("Така закладка вже існує!");
    } else {
      this.updateViwe(cards);
    }
  }
  updateViwe(cards) {
    const markup = cards.reduce((acc, el) => (acc += this.template(el)), "");
    this.result.innerHTML = markup;
  }
  
  deleteResultClick(evt) {
    if (evt.target.nodeName === "BUTTON") {        //передамо посилання, яке хочемо видалити
      this.emit("remove", evt.target.parentNode.firstChild.nextElementSibling.innerHTML);
    } else {
      return;
    }
  }
}
