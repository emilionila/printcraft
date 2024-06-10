import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CardColors.module.scss';
import { Product } from '../../types/product';
import { generateId, getLocation } from '../../utils/helpers';

type Props = {
  product: Product,
};

export const CardColors: React.FC<Props> = ({ product }) => {
  const location = useLocation();
  const [selectedColor, setSelectedColor]
        = useState<string | null>(product.color);

  useEffect(() => {
    setSelectedColor(product.color);
  }, [product, location.search]);

  const colorMap: Record<string, string> = {
    green: '#ade1cd',
    purple: '#d1cddb',
    yellow: '#ffe680',
    black: '#202020',
    white: '#f9f6ef',
    red: '#ba0c2f',
    silver: '#ebebe3',
    gold: '#fac990',
    spacegray: '#52514f',
    starlight: '#faf7f2',
    pink: '#ffb6c1',
    rosegold: '#fbc8bd',
    skyblue: '#87ceeb',
    coral: '#e4664f',
    midnightgreen: '#4e5850',
    blue: '#215e7c',
    midnight: '#171E27',
    graphite: '#4C4A46',
    sierrablue: '#9BB5CE',
    spaceblack: '#4b4845',
  };

  const getColor = (color: string) => {
    return colorMap[color] || color;
  };

  const handleColorClick = (colorItem: string) => {
    setSelectedColor(colorItem);
  };

  return (
    <div className={style.CardColors}>
      <div className={style.CardColors__top}>
        <p className={style.CardColors__top__title}>Available colors</p>
        <p className={style.CardColors__top__id}>
          ID:
          {generateId()}
        </p>
      </div>

      <div className={style.colors__list}>
        {product.colorsavailable.map(colorItem => (
          <div
            key={colorItem}
            className={`${style.color__item__wrapper} ${
              selectedColor === colorItem ? style.active : ''
            }`}
          >
            <Link
              to={{
                pathname: getLocation(product),
                search: `?capacity=${product.capacity}&productId=${product.id}&color=${colorItem}`,
              }}
              onClick={() => handleColorClick(colorItem)}
              className={style.color__item}
              style={{ backgroundColor: getColor(colorItem) }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
