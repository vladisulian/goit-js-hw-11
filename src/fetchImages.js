import axios from 'axios';

async function fetchImages(value, pageNumber) {
  if (value !== '') {
    const response = await axios.get(
      `https://pixabay.com/api/?key=31911886-b70f9395e6a878339225ca253&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNr}`
    );
    return response.data;
  }
  //   catch (error) {
  //     console.error(error)
  //   }
}

export { fetchImages };
