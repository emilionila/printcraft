import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import style from './ProductImagesSlider.module.scss';
import { SERVER_HOST } from '../../utils/helpers';

type Props = {
  images: string[];
};

export const ProductImagesSlider: React.FC<Props> = ({ images }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(`${SERVER_HOST}/${images[0]}`);

  const handlePhotoClick = (photo: string) => {
    setSelectedPhoto(`${SERVER_HOST}/${photo}`);
  };

  useEffect(() => {
    setSelectedPhoto(`${SERVER_HOST}/${images[0]}`);
  }, [images]);

  return (
    <div className={style.container}>
      <div className={style.photo__block}>
        {images.map((photo, index) => (
          <button
            className={cn(style.photo__block_button, {
              [style['photo__block-button__selected']]: selectedPhoto === `${SERVER_HOST}/${photo}`,
            })}
            type="button"
            key={photo}
            onClick={() => handlePhotoClick(photo)}
          >
            <img
              className={style.photo__block_img}
              src={`${SERVER_HOST}/${photo}`}
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>

      <div>
        {selectedPhoto && (
          <img
            className={style.photo__block_main}
            src={selectedPhoto}
            alt={selectedPhoto}
          />
        )}
      </div>
    </div>
  );
};
