import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
// const allImgDescription = galleryItems.flatMap(
//   (galleryItem) => galleryItem.description
// );

// const allImgUrl = galleryItems.flatMap((galleryItem) => galleryItem.original);

// console.log(allImgDescription);
// console.log(allImgUrl);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="galary__item"><img class="galary__img" width="100%" data-source="${preview}" src="${original}" alt="${description}"></li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

// gallery.addEventListener("click", selectImg);

// This is where delegation «magic» happens
// function selectImg(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   //   const selectedColor = event.target.dataset.color;
//   //   output.textContent = `Selected color: ${selectedColor}`;
//   //   output.style.color = selectedColor;
// }

// Some helper functions to render palette items
// createGalleryItems();

// function createGalleryItems() {
//   const items = [];
//   for (let i = 0; i < galleryItems.length; i++) {
//     // const color = getRangomColor();

//     const item = document.createElement("img");
//     item.src = galleryItems.flatMap((galleryItem) => galleryItem.original);
//     // item.dataset.source = galleryItems.flatMap(
//     //   (galleryItem) => galleryItem.original
//     // );
//     item.alt = galleryItems.flatMap((galleryItem) => galleryItem.description);
//     // item.style.backgroundColor = color;
//     // item.classList.add("item");
//     items.push(item);
//   }
//   gallery.append(...items);
// }
// console.log(gallery);
