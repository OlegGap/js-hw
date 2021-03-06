export default class Model {
  constructor() {
    this.cards = [
      {
        url: "demo",
        "logo-url": "https://www.freelogodesign.org/Content/img/logo-ex-7.png"
      }
    ];
  }

  updateLocStor() {
    if (JSON.parse(localStorage.getItem("cardsData"))) {
      this.cards = JSON.parse(localStorage.getItem("cardsData"));
    }
  }

  isNotCorect(val) {    //якщо не коректне введення поверне "тип" помилки
    const checkURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!checkURL.test(val)) {
      return "notCorect";
    } else if (this.cards.some(elem => val === elem.url)) {
      return "haveIt";
    }
    return false;
  }
  addCard(inputValue) {
    const data = {
      key: "5cd40f3bec0e35c20a74cf61b9b1d52cacfe039b93914",
      q: inputValue
    };
    return fetch(`https://api.linkpreview.net/?key=${data.key}&q=${data.q}`)
      .then(res => res.json())
      .then(response => {
        this.cards.push({ url: inputValue, "logo-url": response.image });
        localStorage.setItem("cardsData", JSON.stringify(this.cards));
        return this.cards;
      })
      .catch(e => console.error(e));
  }

  removeCard(curentURL) {
    this.cards = this.cards.filter(elem => curentURL != elem.url);
    localStorage.setItem("cardsData", JSON.stringify(this.cards));
    return this.cards;
  }
}
