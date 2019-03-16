function Hero(name, age) {
  this.name = name;
  this.age = age;
}

// Hero.prototype.setAge = function(newAge) {
//   console.log(`Add age ${newAge}`);
//   this.age += newAge;
// };

function Warrior(name, age, weapon) {
  Hero.call(this, name, age);

  this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.attack = function() {
  console.log(`${this.name} is Attack!!!`);
};

const hero = new Warrior("Oleg", 30, 45);
console.log(hero);

const warrior = new Warrior("Sasha", 35, 40);
warrior.attack();

/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

function Account(login, email) {
  this.login = login;
  this.email = email;
}
Account.proyotype.getInfo = function() {
  console.log(this.login, this.email);
};


const account = new Account("Mangozedog", "mango@dog.woof");

console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
