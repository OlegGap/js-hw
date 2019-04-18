/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const list = document.querySelector('.input-list');
list.addEventListener('click', handleListClick);

 function handleListClick ({target}){
  
   if(target.nodeName!=='INPUT') return;
   target.onblur = function() {
    if (target.dataset.length==target.value.length) {
      target.classList.remove('invalid');
      target.classList.add('valid');            
    } else {
      target.classList.remove('valid');
      target.classList.add('invalid'); 
    }}
 }