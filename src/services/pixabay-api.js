import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33749963-ca56a1f71992b6263ff0cd5ce';

export const getImagesByQuery = async (query, page) => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 12,
  };

  const { data, status } = await axios.get(BASE_URL, { params });
  console.log(status);
  if (status !== 200) {
    throw new Error(`Bad response, ${status}`);
  }
  const images = data.hits.map(({ id, tags, webformatURL, largeImageURL }) => ({
    id,
    tags,
    webformatURL,
    largeImageURL,
  }));


  const totalImages = data.totalHits;

  return { images, totalImages };
};
