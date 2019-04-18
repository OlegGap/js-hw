/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
const btn = document.querySelector('.btn');
const modal = document.querySelector('.js-modal-backdrop');

btn.addEventListener('click', handleBtnClick);
function handleBtnClick(){
  modal.classList.remove('modal-hidden');
  console.log('remove')
}

modal.addEventListener('click', handleModalClick);

function handleModalClick({target}){
  if( target.dataset.action=='close-modal'|| target.classList.contains('js-modal-backdrop')){
    modal.classList.add('modal-hidden');
  }
}
