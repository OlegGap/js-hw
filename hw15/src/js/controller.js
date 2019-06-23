
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on("add", this.addCard.bind(this));
        view.on("remove", this.removeCard.bind(this));
        this.model.updateLocalStorage();
        this.view.updateView(this.model.cards); //відрисує закладки при завантажені
    }

    addCard(input) {
        let error = null;
        if (!this.model.isCorrectUrl(input)) {
            error = "Невірний формат!";
        } else if (!this.model.isUniqueUrl(input)) {
            error = "Така закладка вже існує!";
        }
        if (error !== null) {
            this.view.addCard(error);
        } else {
            this.model.addCard(input).then(cards => this.view.addCard(cards));
        }
    }

    removeCard(currentURL) {
        this.view.updateView(this.model.removeCard(currentURL));
    }
}
