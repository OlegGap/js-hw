import Model from "../js/model";
import axios from "axios";

jest.mock("axios");

const url = "google.com";
const model = new Model();
describe("Method 'add card'", () => {
  test("should fetch cards by input value", () => {
    expect.assertions(2);

    const response = {
      data: { url: url, "logo-url": "some url logo" }
    };

    axios.get.mockResolvedValue(response);

    const result = { url: url, "logo-url": "some url logo" };

    return model
      .addCard(url)
      .then(cards => {
        cards.map(card => expect(card).toEqual(result));
      })
      .catch(error => expect(error).not.toBeNull())
      .finally(() => {
        model.removeCard(url);
      });
  });
});
describe("Method 'isCorrectUrl'", () => {
  test("Should return false if value is not correct", () => {
    return expect(model.isCorrectUrl("anth")).toBeFalsy();
  });
  test("should return true if value is correct", () => {
    return expect(model.isCorrectUrl(url)).toBeTruthy();
  });
});
describe('Method "isUniqueUrl"', () => {
  test("should return true if value is unique", () => {
    return expect(model.isUniqueUrl(url)).toBeTruthy();
  });

  test("should return false if value is is not unique", () => {
    expect.assertions(1);

    const response = {
      data: { url: url, "logo-url": "some url logo" }
    };

    axios.get.mockResolvedValue(response);

    return model
      .addCard(url)
      .then(result => expect(model.isUniqueUrl(url)).toBeFalsy())
      .finally(result => {
        model.removeCard(url);
      });
  });
});
describe('Method "removeCard"', () => {
  test("should corect delete card", () => {

    expect.assertions(1);
    const response = {
      data: { url: url, "logo-url": "some url logo" }
    };
    axios.get.mockResolvedValue(response);

    return model
      .addCard(url)
      .then(result =>
        expect(model.removeCard(url).some(card => card.url === url)).toBeFalsy()
      );
  });
});
