import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ===== 1. Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

function selectImg(event) {
  event.preventDefault();
  // ====== 2. Реализация делегирования на div.gallery и получение url большого изображения.
  const selectedImg = event.target.dataset.source;

  // ====== 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
  // Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
  // ====== 4. Открытие модального окна по клику на элементе галереи.
  // Для этого ознакомься с документацией и примерами.
  const instance = basicLightbox.create(`<img src=${selectedImg}>`);

  instance.show();
}

function closeEscape(event) {
  const instance = basicLightbox.create(`<img src="">`);
  if (event.key === "Escape") {
    // console.log(instance);
    instance.close(() => console.log("lightbox not visible anymore"));

    return;
  }
}

// const instance = basicLightbox.create(`<img src="" />`, {
//   onShow: () => {
//     window.addEventListener("keydown", closeEscape);
//   },
//   onClose: () => {
//     window.removeEventListener("keydown", closeEscape);
//   },
// });

gallery.addEventListener("click", selectImg);
window.addEventListener("keydown", closeEscape);
// window.removeEventListener("keydown", closeEscape);
console.log(galleryItems);
