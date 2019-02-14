
`use script`

let userInput;
const numbers = [];
let total = 0;
do{ 
    if(Number.isNaN(userInput)){       //ввели не число --> спробуйте ще раз
        alert("Было введено не число, попробуйте еще раз");

    }else if(userInput===undefined){    //пропускаємо перший(пустий) елемент 
    }else{
        numbers.push(userInput);        //ввели число --> пушимо в масив
    }
    userInput = Number(prompt("Введите число"));//Введіть число
    
}while(userInput !== 0);   //повторюємо поки не нажато Cancel 

for(const value of numbers){
    total += value;        //знаходимо суму
}
if(numbers.length!==0){    //довжина масиву чисел більша 0 --> Виводимо суму
    alert(`Общая сумма чисел равна: `+ total);
}else{
    alert('Ви ничего не ввели');//довжина масиву чисел менша 0
}


////////////////////////////////////////////////////////////  Додаткове завдання  /////////////////////////////////////////////////////////////////////////////////////
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let confirm = false;
let pas;
do{
  pas = prompt("Input password"); //просимо ввести пароль
  for(const value of passwords){  //порівнюємо введені дані з множиною паролів
    if(pas===null){               //нажато Cancel --> вихід з циклу
      break;                      
    }
    if(pas===value){              //введенне співпало з одним із паролів
      alert("Добро пожаловать!"); 
      confirm = true;             //доступ дозволено --> вихід з циклу
      break;                      
    } 
  }
  attempts -= 1;                  //віднімаємо одну спробу введення
  if(attempts !== 0 && !confirm && pas!==null){     //якщо доступ не дозволенно і не нажато Cancel і залишились спроби --> Спробуйте ще раз
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  }
}while(attempts!==0 && !confirm && pas!==null);      //Повторюємо пики: є спроби, доступ не дозволенно, не нажато Cancel

if(attempts === 0 && !confirm && pas!==null){        //спроби закінчились, доступ не дозволенно, не нажато Cancel --> Спроби закінчились
  alert("У вас закончились попытки, аккаунт заблокирован!");
}else if(pas===null){                                //нажато Cancel
  alert("Очень жаль!")
}