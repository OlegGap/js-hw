/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 *
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 *
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 *
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 *
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 *
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

const DELAY = 1000;
const quantity = 100;

function processOrder(value) {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(value)) {
        console.log("Некорректный ввод!");
      } else {
        if (quantity >= value) {
          resolve("Ваш заказ готов!");
        } else {
          reject("К сожалению на складе недостаточно товаров!");
        }
      }
    }, DELAY / 2);
  });
  return promise;
}
// Вызовы функции для проверки
processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(50)
  .then(console.log) // Ваш заказ готов!
  .catch(console.log);

processOrder(500)
  .then(console.log) // К сожалению на складе недостаточно товаров!
  .catch(console.log);

processOrder("lorem")
  .then(console.log)
  .catch(console.log); // Некорректный ввод!
