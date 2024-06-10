/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import './EmptyFavorites.scss';

export const EmptyFavorites = () => (
  <div className="EmptyFavorites--section">
    <div className="EmptyFavorites">
      <img
        className="EmptyFavorites--image"
        src="https://i.pinimg.com/originals/09/fa/46/09fa464f74f2b4d578f98a54b82fb456.gif"
        alt="Empty cart"
      />
    </div>

    <h1 className="EmptyFavorites--title">No favorites found</h1>

    <NavLink
      to="/printers"
      className="homeButton"
    >
      Go to catalogue
    </NavLink>
  </div>
);
