import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('input');
const form = document.querySelector('form');
const searchButton = document.querySelector('[type=submit]');
const gallery = document.querySelector('.gallery');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');
let pageNumber = 1;

// const fetchGallery = name => {
//   return fetch(`https://pixabay.com/api/?key=31911886-b70f9395e6a878339225ca253&q=${name}&image_type=photo&orientation=horizontal&safesearch=true
//   `).then(response => {
//     return response.json();
//   });
// };

searchButton.addEventListener('click', e => {
  e.preventDefault();
  const value = input.value.trim();
});
// function renderPhotos() {
//   map();
// }

