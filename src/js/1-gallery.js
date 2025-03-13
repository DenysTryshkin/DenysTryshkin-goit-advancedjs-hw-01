import SimpleLightbox from "simplelightbox";
import images from "./imagesData.json";
import { createGalleryImagesTemplate } from './function';

const galleryList = document.querySelector(".gallery")
galleryList.innerHTML = createGalleryImagesTemplate(images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
})

const galleryItems = document.querySelectorAll(".gallery-item")
galleryItems.forEach(galleryItem => {
    galleryItem.style.width = "360px";
    galleryItem.style.height = "200px";

    const img = galleryItem.querySelector("img");
    if (img) {
        img.style.width = "360px";
        img.style.height = "200px";
    }
})