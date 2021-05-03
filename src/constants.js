import alco1 from './img/alco1.jpg';
import alco2 from './img/alco2.jpg';
import alco3 from './img/alco3.jpg';
import alco4 from './img/alco4.jpg';

const IMAGES = [alco1, alco2, alco3, alco4];
const IMAGES_COUNT = IMAGES.length;
const API_ADDRESS = 'https://api.punkapi.com/v2/beers';
const ON_PAGE = 14;
const SORT_PARAMS = ['abv', 'ebc', 'ibu', 'id', 'ph'];

export {
  IMAGES_COUNT, API_ADDRESS, IMAGES, ON_PAGE, SORT_PARAMS,
};
