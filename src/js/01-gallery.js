// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line


const containerGallery = document.querySelector('.gallery');



const markupGallery = galleryItems.reduce(
    (acc, { original, preview, description }) =>
      (acc += `<li>
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`),
    ''
  );
  
  containerGallery.insertAdjacentHTML('beforeend', markupGallery);
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });


