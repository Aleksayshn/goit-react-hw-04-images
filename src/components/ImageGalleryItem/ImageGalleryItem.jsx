import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components';
import { pageSmoothScroll } from 'services';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  alt,
  smallUrl,
  largeUrl,
  isScrollAnchor,
}) => {
  const [showModal, setShowModal] = useState(false);
  const elementToScroll = useRef(null);

  useEffect(() => {
    if (!isScrollAnchor) return;
    pageSmoothScroll(elementToScroll.current, 88);
  }, [isScrollAnchor]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Item>
      <Image
        src={smallUrl}
        alt={alt}
        onClick={toggleModal}
        ref={elementToScroll}
      />
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeUrl} alt={alt} />
        </Modal>
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  alt: PropTypes.string.isRequired,
  smallUrl: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  isScrollAnchor: PropTypes.bool.isRequired,
};