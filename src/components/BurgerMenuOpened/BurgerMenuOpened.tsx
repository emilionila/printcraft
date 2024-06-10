import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './BurgerMenuOpened.module.scss';
import favoriteImg from '../../icons/Favourites.png';
import ordersLogo from '../../icons/ShoppingBag.png';
import user from '../../icons/User.svg';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { HeaderCounter } from '../HeaderCounter/HeaderCounter';

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  cartCount: number;
  favoriteCount: number;
}

export const BurgerMenuOpened: FC<BurgerMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  cartCount,
  favoriteCount,
}) => {
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={
        classNames(
          styles.burger,
          { [styles.burger__opened]: isMenuOpen },
        )
      }
    >
      <nav className={classNames(styles.burger__nav)}>
        <NavigationLink
          to="/"
          linkText="Home"
          onClick={handleMenuClose}
        />
        <NavigationLink
          to="/printers"
          linkText="Printers"
          onClick={handleMenuClose}
        />
        <NavigationLink
          to="/scanners"
          linkText="Scanners"
          onClick={handleMenuClose}
        />
        <NavigationLink
          to="/accessories"
          linkText="Accessories"
          onClick={handleMenuClose}
        />
      </nav>

      <div className={classNames(styles.service)}>
        <Link
          to="/account/login"
          className={classNames(
            styles.service__button,
          )}
          onClick={handleMenuClose}
        >
          <img
            src={user}
            alt="user logo"
            className={classNames(styles.service__img)}
          />
        </Link>

        <Link
          to="/favorites"
          className={classNames(
            styles.service__button,
            { [styles['service__button-active']]: isMenuOpen },
          )}
          onClick={handleMenuClose}
        >
          <div className={classNames(styles.service__container)}>
            <img
              src={favoriteImg}
              alt="like button"
              className={classNames(styles.service__img)}
            />

            <HeaderCounter productsCount={favoriteCount} />
          </div>
        </Link>

        <Link
          to="/cart"
          className={classNames(
            styles.service__button,
            { [styles['service__button-active']]: isMenuOpen },
          )}
          onClick={handleMenuClose}
        >
          <div className={classNames(styles.service__container)}>
            <img
              src={ordersLogo}
              alt="orders button"
              className={classNames(styles.service__img)}
            />

            <HeaderCounter productsCount={cartCount} />
          </div>
        </Link>
      </div>
    </div>
  );
};
