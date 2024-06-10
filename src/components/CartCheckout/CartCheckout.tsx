import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './CartCheckout.module.scss';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { CheckoutAfterBuy } from '../CheckoutAfterBuy/CheckoutAfterBuy';
import { CartProduct } from '../../types/product';

interface CartCheckoutProps {
  cartStorage: CartProduct[];
}

export const CartCheckout: React.FC<CartCheckoutProps> = ({ cartStorage }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const totalPrice = cartStorage
    .reduce(
      (sum: number, item: CartProduct) => sum
        + (+item.priceActual) * item.quantity, 0,
    );

  return (
    <div className={styles.checkout}>
      <h3 className={styles.checkout__summary}>
        $
        {totalPrice.toFixed(2)}
      </h3>
      <p className={styles.checkout__totalItems}>
        {(cartStorage.length === 1)
          ? (`Total for ${cartStorage.length} item`)
          : (`Total for ${cartStorage.length} items`)}
      </p>

      <CardSeparator />

      <button
        type="button"
        className={classNames(
          styles.checkout__btn,
          { [styles.showThankYou]: showThankYou },
        )}
        onClick={() => {
          setShowThankYou(true);
        }}
      >
        Checkout
      </button>

      {showThankYou && (
        <CheckoutAfterBuy
          totalPrice={totalPrice}
          cartStorage={cartStorage}
        />
      )}
    </div>
  );
};
