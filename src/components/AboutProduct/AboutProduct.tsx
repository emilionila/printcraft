import { Product } from '../../types/product';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import './AboutProduct.scss';

type Props = {
  product: Product[];
};

export const AboutProduct: React.FC<Props> = ({ product }) => (
  <div className="AboutProduct">
    <h1 className="AboutProduct--title">About</h1>

    <CardSeparator />

    {product.map(element => (
      element.description.map(info => (
        <div key={info.title} className="AboutProduct--block">
          <h3 className="AboutProduct--block-title">
            {info.title}
          </h3>
          <p className="AboutProduct--block-describe">
            {info.text}
          </p>
        </div>
      ))
    ))}
  </div>
);
