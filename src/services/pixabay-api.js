import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '33749963-ca56a1f71992b6263ff0cd5ce';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getPixabayImages = async (query, page) => {
  const params = {
    q: query,
    page,
  };

  try {
    const response = await axios.get('', { params });
    const images = response.data.hits.map(({ id, tags, webformatURL, largeImageURL }, idx) => ({
      id,
      alt: tags || '',
      smallUrl: webformatURL,
      largeUrl: largeImageURL,
      isScrollAnchor: !idx,
    }));
    console.log(images);
    return { images, totalImages: response.data.totalHits };
  } catch (error) {
    throw new Error('Unable to get images from Pixabay API.');
  }
};