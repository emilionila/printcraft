import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { NavigationLink } from '../NavigationLink';
import { BurgerMenuOpened } from '../BurgerMenuOpened';
import user from '../../icons/User.svg';
import favoriteImg from '../../icons/Favourites.png';
import ordersLogo from '../../icons/ShoppingBag.png';
import burgerMenu from '../../icons/Menu.png';
import close from '../../icons/Close.png';
import { HeaderCounter } from '../HeaderCounter';
import { scrollToTop } from '../../utils/helpers';
import { Logo } from '../Logo';

type Props = {
  cartCount: number,
  favoriteCount: number,
};

export const Header: React.FC<Props> = ({ cartCount, favoriteCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="navlinks">
          <div className="navlinks__logo">
            <Logo onClick={() => setIsMenuOpen(false)} />
          </div>

          {!isMenuOpen && (
            <nav className="nav">
              <NavigationLink
                to="/"
                linkText="Home"
              />
              <NavigationLink
                to="/printers"
                linkText="Printers"
              />
              <NavigationLink
                to="/scanners"
                linkText="Scanners"
              />
              <NavigationLink
                to="/accessories"
                linkText="Accessories"
              />
            </nav>
          )}
        </div>

        <div className="service">
          <NavLink
            to="/account/login"
            onClick={scrollToTop}
            className={({ isActive }) => classNames(
              'service_btn',
              { active: isActive },
            )}
          >
            <img
              src={user}
              alt="user logo"
              className="service_btn-img"
            />
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={() => scrollToTop()}
            className={({ isActive }) => classNames(
              'service_btn',
              { active: isActive },
            )}
          >
            <img
              src={favoriteImg}
              alt="like button"
              className="service_btn-img"
            />

            <div className={classNames('headerCounter')}>
              <HeaderCounter productsCount={favoriteCount} />
            </div>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => classNames(
              'service_btn',
              { active: isActive },
            )}
            onClick={() => scrollToTop()}
          >
            <img
              src={ordersLogo}
              alt="orders button"
              className="service_btn-img"
            />

            <div>
              <HeaderCounter productsCount={cartCount} />
            </div>
          </NavLink>
        </div>

        <button
          type="button"
          className={classNames(
            'burger_btn',
            { 'burger_btn-active': isMenuOpen },
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src={isMenuOpen ? close : burgerMenu}
            alt={isMenuOpen ? 'close button' : 'menu button'}
            className={classNames('burger_btn_img')}
          />
        </button>
      </div>

      <BurgerMenuOpened
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cartCount={cartCount}
        favoriteCount={favoriteCount}
      />
    </header>
  );
};
