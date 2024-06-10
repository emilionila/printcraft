import { Product } from '../../types/product';
import { DetailsList } from '../DetailsList/DetailsList';
import { ProductControls } from '../ProductControls/ProductControls';
import './ProductVariants.scss';

type Props = {
  product: Product;
};

export const ProductVariants: React.FC<Props> = ({ product }) => {
  return (
    <div className="ProductVariants">
      <ProductControls product={product} />
      <DetailsList product={product} />
    </div>
  );
};
