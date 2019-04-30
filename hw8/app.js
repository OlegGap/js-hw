/*
  Создайте компонент галлереи изображений следующего вида.
  
    
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  // {
  //   preview: "img/preview-1.jpg",
  //   fullview: "img/fullview-1.jpg",
  //   alt: "alt text 1"
  // },
  // {
  //   preview: "img/preview-2.jpg",
  //   fullview: "img/fullview-2.jpg",
  //   alt: "alt text 2"
  // },
  // {
  //   preview: "img/preview-3.jpg",
  //   fullview: "img/fullview-3.jpg",
  //   alt: "alt text 3"
  // },
  // {
  //   preview: "img/preview-4.jpg",
  //   fullview: "img/fullview-4.jpg",
  //   alt: "alt text 4"
  // },
  // {
  //   preview: "img/preview-5.jpg",
  //   fullview: "img/fullview-5.jpg",
  //   alt: "alt text 5"
  // },
  // {
  //   preview: "img/preview-6.jpg",
  //   fullview: "img/fullview-6.jpg",
  //   alt: "alt text 6"
  // },
  {
    preview: "img/preview-1.jpg",
    fullview: "img/fullview-1.jpg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpg",
    fullview: "img/fullview-2.jpg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpg",
    fullview: "img/fullview-3.jpg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpg",
    fullview: "img/fullview-4.jpg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpg",
    fullview: "img/fullview-5.jpg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpg",
    fullview: "img/fullview-6.jpg",
    alt: "alt text 6"
  }
];

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

/* Далее плагин работает в автономном режиме */

class Gallery {
  constructor({ items, parentNode, defaultActiveItem }) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
  }

  build() {
    const fullview = document.createElement("div"); //створюємо блок з картинкою fullview
    fullview.classList.add("fullview");
    fullview.insertAdjacentHTML(
      "afterbegin",
      `<img src="img/fullview-${this.defaultActiveItem}.jpg" alt="alt text ${
        this.defaultActiveItem
      }">`
    );
    this.parentNode.append(fullview);

    let list = this.items.map((el, idx) => {
      return `<li> <img ${                                               //створюємо елемненти LI
        idx == this.defaultActiveItem - 1 ? `class="img-active"` : ""    //додаэмо клас активносты для початковоъ картинки
      }src=${el.preview} data-fullview=${el.fullview} alt=${el.alt}></li>`;
    });
    this.parentNode.insertAdjacentHTML(   //додаємо блок з картинками в основний блок
      "beforeend",
      `<ul class='preview'>` + list.join("") + `</ul>`
    );

    const preview = document.querySelector("ul");
    preview.addEventListener("click", this.handlePreviewClick); //івент кліку на одну з картинок
  }

  handlePreviewClick({ target }) {
    if (target.nodeName !== "IMG") return;

    const currentActiveLink = this.parentNode.querySelector(".img-active"); //шукаэмо активний елемент
    if (currentActiveLink) {
      //якщо такий э - видаляэмо його клас
      currentActiveLink.classList.remove("img-active");
    }
    target.classList.add("img-active"); //додаємо активність новому елементу

    const fullImg = this.parentNode.querySelector(".fullview>img");
    fullImg.setAttribute("src", target.dataset.fullview); //вказуємо блоку з великою картинкою дані з активного елемента
    fullImg.setAttribute("alt", target.getAttribute("alt"));
  }
}

const gallery = new Gallery({
  items: galleryItems,
  parentNode: document.querySelector(".image-gallery"),
  defaultActiveItem: 3
});
gallery.build();
