/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

Object.assign(user, { mood: "heppy" });
user.mood = "javascript";
delete user.premium;

// for(key in user){
//   console.log(`${key}: ${user[key]}`);
// }

// const userArr = Object.keys(user);
// for(const key of userArr){
//     console.log(`${key}: ${user[key]}`);
// }

const userArr = Object.entries(user);
for (const element of userArr) {
  console.log(`${element[0]}: ${element[1]}`);
}
