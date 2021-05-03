import { IMAGES_COUNT, API_ADDRESS, IMAGES } from '../constants';
import errorHandler from './error_handler';

function getResources(resources) {
  const promises = [];

  for (let i = 0; i < IMAGES_COUNT; i += 1) {
    promises.push(
      fetch(IMAGES[i])
        .then((responce) => responce.blob())
        .then((blob) => resources.push(URL.createObjectURL(blob)))
        .catch(errorHandler),
    );
  }
  return promises;
}

function getData(data) {
  const promises = [];

  for (let i = 1; i <= 5; i += 1) {
    promises.push(
      fetch(`${API_ADDRESS}?page=${i}&per_page=65`)
        .then((responce) => responce.json())
        .then((alldata) => data.push(...alldata))
        .catch(errorHandler),
    );
  }
  return promises;
}

export { getResources, getData };
