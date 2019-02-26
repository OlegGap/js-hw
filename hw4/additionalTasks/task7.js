/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

function User(name, isActive, age, friends) {  //конструктор користувача
  this.name = name;
  this.isActive = isActive;
  this.age = age;
  this.friends = friends;
  this.getUserInfo = function() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${
        this.friends
      } friends`
    );
  };
}

function checkConstructor(constructor, name, isActive, age, friends) {  //перевірка на коректність введення
  if (typeof constructor !== "function") {
    console.log("Перший аргумент не функція!");
  } else if (typeof name !== "string" || name.length <= 0) {
    console.log("Другий аргумент не строка!");
  } else if (typeof isActive !== "boolean") {
    console.log("Третій аргумент не буль!");
  } else if (typeof age !== "number") {
    console.log("Четвертий аргумент не число!");
  } else if (typeof friends !== "number") {
    console.log("Четвертий аргумент не число!");
  } else {
    return new constructor(name, isActive, age, friends);
  }
  return console.log("Об'єкт не створено!");
}

const user2 = new checkConstructor("Andriy", false, 45, 234); //створюємо обєкт через констуруктор, черех обгортку перевірки аргументів
user2.getUserInfo();
const user1 = new checkConstructor(User, 3, true, 12, 34);
user1.getUserInfo();
const user3 = new checkConstructor("Roman", false, 42, 294);
user3.getUserInfo();
