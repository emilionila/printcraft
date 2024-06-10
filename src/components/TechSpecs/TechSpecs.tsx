import React from 'react';
import './TechSpecs.scss';
import { DetailsOptions } from '../DetailsOptions/DetailsOptions';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { Product } from '../../types/product';

const productDetails = [
  'Screen',
  'Resolution',
  'Processor',
  'RAM',
  'Built in memory',
  'Camera',
  'Zoom',
  'Cell',
];

type Props = {
  phone: Product;
};

export const TechSpecs: React.FC<Props> = ({ phone }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cells,
  } = phone;

  return (
    <div className="TechSpecsContainer">
      <h1 className="TechSpecs--title">Tech specs</h1>

      <CardSeparator />

      <div className="TechSpecs">
        <ul className="TechSpecs--list">
          {productDetails.map(details => (
            <li className="TechSpecs--list-item">{details}</li>
          ))}
        </ul>

        <ul className="TechSpecs--characteristics">
          <li className="TechSpecs--characteristics-item">{screen || '-'}</li>
          <li className="TechSpecs--characteristics-item">
            {resolution || '-'}
          </li>
          <li className="TechSpecs--characteristics-item">
            {processor || '-'}
          </li>
          <li className="TechSpecs--characteristics-item">{ram || '-'}</li>
          <li className="TechSpecs--characteristics-item">{capacity || '-'}</li>
          <li className="TechSpecs--characteristics-item">{camera || '-'}</li>
          <li className="TechSpecs--characteristics-item">
            {zoom || '-'}
          </li>

          <li className="TechSpecs--characteristics-item">
            {cells.map(option => (
              <DetailsOptions
                key={option}
                option={option}
              />
            )) || '-'}
          </li>
        </ul>
      </div>
    </div>
  );
};
