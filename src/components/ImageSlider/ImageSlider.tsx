import { FC } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './ImageSlider.module.scss';

const cn = classNames.bind(styles);

type Props = {
  slides: string[];
  currentIndex: number;
};

export const ImageSlider: FC<Props> = ({ slides, currentIndex }) => {
  return (
    <div className={cn('container__slider')}>
      <div
        style={{ transform: `translateX(-${100 * currentIndex}%)` }}
        className={cn('slider')}
      >
        {slides.map((slide) => (
          <NavLink
            key={slide.toString()}
            to="/printers"
            className={cn('slider__slide')}
          >
            <img
              className={cn('slider__image')}
              src={slide}
              alt="slider Item"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
