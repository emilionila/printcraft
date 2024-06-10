/* eslint-disable max-len */
import { NavLink } from 'react-router-dom';
import './NoItems.scss';

export const NoItems = () => (
  <div className="NoItems--section">
    <div className="NoItems">
      <img
        className="NoItems--image"
        src="https://images-ext-2.discordapp.net/external/iwVvk8QVMdPDTqvO4e9zxc4UOWkNa1AatOD5t-sPsGU/https/media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHc5MXZmc3N3ZnljcTRmZDJpcXNsdDh3Y2Y2YTVxcWgweXpocTdnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J8YpfDX0kvPQNSVGHY/giphy.gif"
        alt="Empty cart"
      />
    </div>

    <h1 className="NoItems--title">No items in cart</h1>

    <NavLink
      to="/printers"
      className="homeButton"
    >
      Go shopping
    </NavLink>
  </div>
);
