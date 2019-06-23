import * as localStorage from "../services/localStorage";
import axios from 'axios'

export default class Model {
  constructor() {
    this.cards = [
      {
        url: "demo",
        "logo-url": "https://www.freelogodesign.org/Content/img/logo-ex-7.png"
      }
    ];
  }

  updateLocalStorage() {
    if (localStorage.get("cardsData")) {
      this.cards = localStorage.get("cardsData");
    }
  }

  isCorrectUrl(val) {
    const checkURL = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return checkURL.test(val);
  }

  isUniqueUrl(val) {
    return !this.cards.some(elem => val === elem.url);
  }
  
  addCard(inputValue) {
    const data = {
      key: process.env.FREELOGODESIGN_API_KEY,
      q: inputValue
    };
    return axios.get(`https://api.linkpreview.net/?key=${data.key}&q=${data.q}`)
      .then(result => result.data)
      .then(response => {
        this.cards.push({ url: inputValue, "logo-url": response.image });
        localStorage.set("cardsData", this.cards);
        return this.cards;
      })
      .catch(e => console.error(e));
  }

  removeCard(currentURL) {
    this.cards = this.cards.filter(element => currentURL !== element.url);
    localStorage.set("cardsData", this.cards);
    return this.cards;
  }
}
