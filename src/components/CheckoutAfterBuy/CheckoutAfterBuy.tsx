import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CheckoutAfterBuy.scss';
import close from '../../icons/Close.png';
import { CartProduct } from '../../types/product';
import { SERVER_HOST, generateId, getLocation } from '../../utils/helpers';
import check from '../../icons/approval-40.png';
import { clearCart } from '../../redux/reducers/cartSlice';

interface Props {
  totalPrice: number;
  cartStorage: CartProduct[];
}

export const CheckoutAfterBuy: React.FC<Props> = ({
  totalPrice,
  cartStorage,
}) => {
  const dispatch = useDispatch();
  const orderNumber = generateId();

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('cart');
  };

  document.body.style.overflow = 'hidden';

  return (
    <div className="fone">
      <div className="checkout">
        <Link
          to="/printers"
          className="checkout__closer"
          onClick={handleClearCart}
        >
          <img
            src={close}
            className="checkout__closer--img"
            alt="phone"
          />
        </Link>
        <div>
          <img src={check} alt="check" />
        </div>

        <p className="checkout__txt">
          thank you for your order
        </p>

        <div className="check">
          {cartStorage.map((product) => {
            return (
              <div key={product.name} className="product">
                <div className="product_info">
                  <Link
                    to={{
                      pathname: getLocation(product),
                      search: `?productId=${product.id}&color=${product.color}`,
                    }}
                    onClick={handleClearCart}
                  >
                    <img
                      src={`${product.images[0]}`}
                      alt={product.name}
                      className="product_image"
                    />
                  </Link>

                  <p className="product_count">
                    {product.quantity > 1 && ` x ${product.quantity}`}
                  </p>

                  <div className="product_description">
                    <Link
                      className="product_name"
                      onClick={handleClearCart}
                      to={{
                        pathname: getLocation(product),
                        search: `?productId=${product.id}&color=${product.color}`,
                      }}
                    >
                      <p>{product.name}</p>
                    </Link>
                    <p>
                      $
                      {`${(+product.priceActual).toFixed(2)} `}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="order">
          <p>
            {`Total: $  
          ${totalPrice.toFixed(2)}`}
          </p>

          <div className="order_num">
            <p className="order_txt">
              Order Number:
            </p>

            <p className="order_txt">
              {`№${orderNumber}`}
            </p>
          </div>
        </div>

        <Link
          to="/printers"
          className="checkout__closerButton"
          onClick={handleClearCart}
        >
          Close
        </Link>

      </div>
    </div>
  );
};
