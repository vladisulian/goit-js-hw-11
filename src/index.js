import { fetchImages } from './fetchImages';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const input = document.querySelector('input');
const form = document.querySelector('form');
const searchButton = document.querySelector('[type=submit]');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');
let gallerySimpleLightbox = new SimpleLightbox('.gallery a');
let pageNumber = 1;

btnLoadMore.style.display = 'none';

searchButton.addEventListener('click', e => {
  e.preventDefault();
  const value = input.value.trim();

  if (value !== '') {
    fetchImages(value, pageNumber).then(foundData => {
      if (foundData.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        renderImageList(foundData.hits);
        Notiflix.Notify.success(
          `Hooray! We found ${foundData.totalHits} images.`
        );
        btnLoadMore.style.display = 'block';
        gallerySimpleLightbox.refresh();
      }
    });
  }
});
btnLoadMore.addEventListener('click', () => {
  pageNumber++;
  const value = input.value.trim();
  btnLoadMore.style.display = 'none';
  fetchImages(value, pageNumber).then(foundData => {
    if (foundData.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      renderImageList(foundData.hits);
      Notiflix.Notify.success(
        `Hooray! We found ${foundData.totalHits} totalHits images.`
      );
      btnLoadMore.style.display = 'block';
    }
  });
});

function renderImageList(images) {
  console.log(images, 'images');
  const markup = images
    .map(image => {
      console.log('img', image);
      return `<div class="photo-card">
          <a href="${image.largeImageURL}"><img class="photo" src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" loading="lazy"/></a>
          <div class="info">
              <p class="info-item">
                  <b>Likes</b> <span class="info-item-api"> ${image.likes} </span>
              </p>
              <p class="info-item">
                  <b>Views</b> <span class="info-item-api">${image.views}</span>  
              </p>
              <p class="info-item">
                  <b>Comments</b> <span class="info-item-api">${image.comments}</span>  
              </p>
              <p class="info-item">
                  <b>Downloads</b> <span class="info-item-api">${image.downloads}</span> 
              </p>
          </div>
      </div>`;
    })
    .join('');
  gallery.innerHTML += markup;
}

function cleanGallery() {
  gallery.innerHTML = '';
  pageNumber = 1;
  btnLoadMore.style.display = 'none';
}
