import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => (
  <List>
    {images.map(({ id, alt, smallUrl, largeUrl, isScrollAnchor }) => (
      <ImageGalleryItem
        key={id}
        alt={alt}
        smallUrl={smallUrl}
        largeUrl={largeUrl}
        isScrollAnchor={isScrollAnchor}
      />
    ))}
  </List>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
