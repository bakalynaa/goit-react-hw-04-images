import React from 'react';
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => onImageClick(image.largeImageURL)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
