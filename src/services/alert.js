import { toast } from 'react-toastify';

export const alertOnResolved = (imagesLength, totalImages, page) => {
  if (imagesLength === 0 && totalImages === 0) {
    toast.error(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  if (imagesLength < 12 && page > 1) {
    toast.info("We're sorry, but you've reached the end of search results.");
  }
  if (imagesLength !== 0 && page === 1) {
    toast.success(`Hooray! We found ${totalImages} images.`);
  }
};

export const alertOnRejected = () => {
  toast.error('Oooops! Something went wrong...');
};
