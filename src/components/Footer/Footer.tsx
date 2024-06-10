import { Link } from 'react-router-dom';
import FooterStyle from './Footer.module.scss';
import ArrowUp from '../../icons/Slider_button.png';
import { scrollToTop } from '../../utils/helpers';
import { Logo } from '../Logo';

export const Footer = () => (
  <footer className={FooterStyle.container}>
    <div className={FooterStyle.logo}>
      <Logo onClick={() => scrollToTop} />
    </div>

    <div className={FooterStyle.footerLinks}>
      <Link
        to="https://github.com/Mythic-Minds-Alliance"
        className={FooterStyle.footerLinkItem}
        target="_blank"
        rel="noreferrer"
      >
        Github
      </Link>

      <Link
        to="contacts"
        className={FooterStyle.footerLinkItem}
        onClick={scrollToTop}
      >
        Contacts
      </Link>

      <Link
        to="rights"
        className={FooterStyle.footerLinkItem}
        onClick={scrollToTop}
      >
        Rights
      </Link>
    </div>

    <div className={FooterStyle.footerGoUp}>
      <p className={FooterStyle.goUpText}>Back to top</p>

      <button
        type="button"
        className={FooterStyle.goUpLink}
        onClick={scrollToTop}
      >
        <img
          src={ArrowUp}
          alt="Arrow Up"
          className={FooterStyle.goUpBtn}
        />
      </button>
    </div>
  </footer>
);
