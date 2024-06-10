/* eslint-disable max-len */
import { Product } from '../../types/product';
import './DetailsList.scss';

type Props = {
  product: Product,
};

export const DetailsList: React.FC<Props> = ({ product }) => {
  const {
      resolution,
      type,
      format,
  } = product;

  return (
    <div className="details">
      <ul className="details--list">
        <li className="details--list-item">Resolution</li>
        <li className="details--characteristics-item">{resolution || '-'}</li>
      </ul>

      <ul className="details--list">
        <li className="details--list-item">Type</li>
        <li className="details--characteristics-item">{type || '-'}</li>
      </ul>

      <ul className="details--list">
        <li className="details--list-item">Format</li>
        <li className="details--characteristics-item">{format || '-'}</li>
      </ul>
    </div>
  );
};
