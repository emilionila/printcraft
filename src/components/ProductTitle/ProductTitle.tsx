import { Product } from '../../types/product';
import productTitleStyles from './ProductTitle.module.scss';

type Props = {
  title: Product;
};

export const ProductTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className={productTitleStyles.title}>
      {title.name}
    </h1>
  );
};
