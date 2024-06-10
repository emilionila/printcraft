import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from './CartItem.module.scss';
import { Cross } from '../Cross/Cross';

import { Minus } from '../Minus/Minus';
import plus from '../../icons/Plus.svg';
import { CartProduct } from '../../types/product';
import { SERVER_HOST, getLocation } from '../../utils/helpers';

import { minusOne, plusOne } from '../../redux/reducers/cartSlice';

type Props = {
  item: CartProduct;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_closeAndFoto}>
          <div className={styles.item__container_close}>
            <Cross item={item} />
          </div>

          <Link
            to={{
              pathname: getLocation(item),
              search: `?productId=${item.id}&color=${item.color}`,
            }}
          >
            <img
              src={`${item.images[0]}`}
              className={styles.item__container_phone}
              alt="phone"
            />
          </Link>
        </div>

        <Link
          to={{
            pathname: getLocation(item),
            search: `?productId=${item.id}&color=${item.color}`,
          }}
        >
          <p className={styles.item__container_model}>
            {item.name}
          </p>
        </Link>
      </div>

      <div className={styles.item_price_info}>
        <div className={styles.item__container_buttons}>
          <button
            type="button"
            disabled={(item.quantity === 1)}
            aria-label="btn"
            className={styles.item__container_minus}
            onClick={() => {
              dispatch(minusOne(item));
            }}
          >
            <Minus />
          </button>

          <span className={styles.item__container_number}>
            {item.quantity}
          </span>

          <button
            type="button"
            className={styles.item__container_plus}
            onClick={() => {
              dispatch(plusOne(item));
            }}
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>

        <span className={styles.item__container_price}>
          {`$${(+item.priceActual) * item.quantity}`}
        </span>
      </div>
    </div>
  );
};
