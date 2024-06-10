import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import './AddToCart.scss';
import like from '../../icons/like.svg';
import likeActive from '../../icons/like-active.svg';
import { CartProduct, Product } from '../../types/product';
import { RootState } from '../../redux/store/store';
import { addProduct } from '../../redux/reducers/cartSlice';
import { addFavorite } from '../../redux/reducers/favoriteSlice';

type Props = {
  product: Product,
};

export const AddToCart: React.FC<Props> = ({ product }) => {
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveFavorite, setIsActiveFavorite] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.list);
  const favoritesStorage = useSelector(
    (state: RootState) => state.favorites.list,
  );

  const checkIsActive = (
    item: Product,
    productStorage: CartProduct[] | Product[],
  ) => {
    return productStorage.some(phoneCard => phoneCard.name === item.name);
  };

  useEffect(() => {
    if (checkIsActive(product, cart)) {
      setIsActiveAdd(true);
    } else {
      setIsActiveAdd(false);
    }

    if (checkIsActive(product, favoritesStorage)) {
      setIsActiveFavorite(true);
    } else {
      setIsActiveFavorite(false);
    }
  }, [cart, favoritesStorage, product]);

  const handleClickAdd = () => {
    setIsActiveAdd(!isActiveAdd);
  };

  const handleClickFavorite = () => {
    setIsActiveFavorite(!isActiveFavorite);
  };

  return (
    <div className="addToCart">
      <button
        className={classNames('addToCart--button', {
          'addToCart--button-active': isActiveAdd,
          'addToCart--button-inactive': !isActiveAdd,
        })}
        type="submit"
        onClick={() => {
          handleClickAdd();
          dispatch(addProduct(product));
        }}
      >
        {!isActiveAdd ? 'Add to cart' : 'Added to cart'}
      </button>
      <button
        type="submit"
        className={
          isActiveFavorite
            ? 'addToCart--favorite-active'
            : 'addToCart--favorite'
        }
        onClick={() => {
          handleClickFavorite();
          dispatch(addFavorite(product));
        }}
      >
        <img
          src={isActiveFavorite ? likeActive : like}
          alt="like"
          className="addToCart--icons"
        />
      </button>
    </div>
  );
};
