// const lodash = require('lodash')
// import SimpleLightbox from "simplelightbox";
// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// const galleryEl = document.querySelector('ul.gallery');

// function makeGallery(arr) {
//   const galleryItemsMarkup = arr
//     .map(({ preview, original, description }) => {
//       return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a></li>`;
//     })
//     .join('');
//   return galleryEl.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
// }

// makeGallery(galleryItems);
// const gallery = new SimpleLightbox('ul.gallery a');
// console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
};

const cardsMarkup = createGalleryMarkup(galleryItems);

refs.galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img class="gallery__image"
   src="${preview} "
   data-source="${original} "
   alt="${description} "/>
</a>
</div>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);