import { NavLink } from 'react-router-dom';
import './EmptyCart.scss';

export const EmptyCart = () => (
  <div className="EmptyCart--section">
    <div className="EmptyCart">
      <img
        className="EmptyCart--image"
        src="https://poruch.store/img/empty-cart.svg"
        alt="Empty cart"
      />
    </div>

    <h1 className="EmptyCart--title">Any items found</h1>

    <NavLink
      to="/printers"
      className="homeButton"
    >
      Go shopping
    </NavLink>
  </div>
);
