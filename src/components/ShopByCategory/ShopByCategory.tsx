import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';
import TabletImg from '../../images/scanner.jpg';
import Accessories from '../../images/accessories.jpg';
import PhonesImg from '../../images/printer.jpg';
import { scrollToTop } from '../../utils/helpers';
import { RootState } from '../../redux/store/store';

export const ShopByCategory = () => {
  const productList = useSelector((state: RootState) => state.products.list);
  const numberOfPhones = productList
    .filter(product => product.categoryId === 1).length;
  const numberOfTablets = productList
    .filter(product => product.categoryId === 2).length;
  const numberOfAccessories = productList
    .filter(product => product.categoryId === 3).length;

  return (
    <section className={`${styles.section} ${styles.shopByCategory}`}>
      <h3 className={styles.sectionTitle}>Shop by category</h3>

      <div className={styles.categoriesContainer}>
        <div className={styles.categoryItem}>

          <NavLink
            to="/printers"
            onClick={scrollToTop}
            className={styles.categoryTitle}
          >
            <img
              src={PhonesImg}
              alt="Iphone 14 in black color"
              className={styles.categoryImg}
            />
            Printers
          </NavLink>
          <p className={styles.categorySubtitle}>{`10 models`}</p>
        </div>

        <div className={styles.categoryItem}>
          <NavLink
            to="/scanners"
            onClick={scrollToTop}
            className={styles.categoryTitle}
          >
            <img
              src={TabletImg}
              alt="Ipad in black, grey and white color"
              className={styles.categoryImg}
            />
            Scanners
          </NavLink>
          <p className={styles.categorySubtitle}>{`10 models`}</p>
        </div>

        <div className={styles.categoryItem}>
          <NavLink
            to="/accessories"
            onClick={scrollToTop}
            className={styles.categoryTitle}
          >
            <img
              src={Accessories}
              alt="Iphone cases"
              className={styles.categoryImg}
            />
            Accessories
          </NavLink>
          <p className={styles.categorySubtitle}>{`10 models`}</p>
        </div>
      </div>
    </section>
  );
};
