import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from '../../components/CartItem';
import './CartPage.scss';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';
import { EmptyCart } from '../../components/EmptyCart/EmptyCart';
import { BackButton } from '../../components/BackButton';

import { RootState } from '../../redux/store/store';
import { clearCart } from '../../redux/reducers/cartSlice';

export const CartPage = () => {
  const cartStorage = useSelector((state: RootState) => state.cart.list);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('cart');
  };

  return (
    <div className="CartPage">
      <BackButton />

      <div className="CartPage__top">
        <h1 className="CartPage--title">Cart</h1>
        {cartStorage.length > 0 && (
          <button
            type="button"
            className="CartPage__clear"
            onClick={handleClearCart}
          >
            Remove all
          </button>
        )}
      </div>

      {cartStorage.length ? (
        <div className="CartPage--section">
          <div className="CartPage--block">
            {cartStorage.map(item => (
              <CartItem item={item} key={item.name} />
            ))}
          </div>

          <div className="CartPage--Checkout">
            <CartCheckout
              cartStorage={cartStorage}
            />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
