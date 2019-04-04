/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
    {
      url:
        "https://www.tcd.ie/CAPSL/assets/img/eLearning/placeholder300.png",
      alt: "White and Black Long Fur Cat"
    },
    {
      url:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    {
      url:
        "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Two Brown Hen and One Red Rooster"
    },
    {
      url:
        "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running"
    },
    {
      url:
        "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Macaw Birds"
    },
    {
      url:
        "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "2 Lion on Grass Field during Daytime"
    }
  ];
  
  const gallery= document.querySelector('.gallery');
  const items=[];
  galleryItems.map(item=>{
    li=document.createElement('li');
    li.insertAdjacentHTML(`afterbegin`,"<img>");
   li.firstElementChild.setAttribute('alt', item.alt);
    li.firstElementChild.setAttribute('src', item.url);
    li.firstElementChild.classList.add('list-item')
    items.push(li);
    console.log(li);
  });
  gallery.append(...items);
  console.log(gallery);