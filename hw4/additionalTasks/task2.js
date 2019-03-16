/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};
let tasksCompletedMax = 0;
for (key in tasksCompleted) {
  if (tasksCompleted[key] > tasksCompletedMax) {
    tasksCompletedMax = tasksCompleted[key];
  }
}
console.log(tasksCompletedMax);