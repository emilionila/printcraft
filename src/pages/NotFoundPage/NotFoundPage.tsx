import { NavLink } from 'react-router-dom';

import './NotFoundPage.scss';

export const NotFoundPage = () => (
  <div className="notFound--section">
    <div>
      <img
        src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
        alt="Travolta"
      />
    </div>

    <h1 className="notFound--title">Page Not Found</h1>

    <NavLink
      to="/"
      className="homeButton"
    >
      Home
    </NavLink>
  </div>
);
