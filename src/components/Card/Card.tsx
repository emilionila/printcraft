import './Card.scss';

import { Link } from 'react-router-dom';

import React from 'react';
import { Product } from '../../types/product';
import { DetailsList } from '../DetailsList/DetailsList';
import { AddToCart } from '../AddToCart/AddToCart';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { CardPrices } from '../CardPrices/CardPrices';
import { getLocation, scrollToTop } from '../../utils/helpers';
import notFoundImg from '../../images/not found.jpg';

type Props = {
  product: Product,
};

export const Card: React.FC<Props> = ({ product }) => {
  const {
    name,
    priceRegular,
    priceActual,
    images,
  } = product;

  document.body.style.overflow = '';

  return (
    <div className="card">
      <div className="card--top">
        <Link
          to={{
            pathname: getLocation(product),
            search: `productId=${product.namespaceId}`,
          }}
          className="card--photo"
          onClick={scrollToTop}
        >
          {images !== null ? (
            <img
              src={`${product.images[0]}`}
              alt={`${name}`}
              className="card--image"
            />
          ) : (
            <img
              src={notFoundImg}
              alt={`${name}`}
              className="card--image"
            />
          )}
        </Link>
      </div>

      <p className="card--title">
        {name}
      </p>

      <CardPrices price={priceRegular} priceActual={priceActual} />

      <div className="card--line">
        <CardSeparator />
      </div>

      <div className="card--bottom">
        <DetailsList
          product={product}
        />
      </div>

      <AddToCart product={product} />
    </div>
  );
};
