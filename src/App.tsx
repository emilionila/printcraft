import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useEffect }
  from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import style from './MainContainer.module.scss';

import { RootState } from './redux/store/store';
import { fetchData } from './utils/helpers';
import { set } from './redux/reducers/productSlice';

export const App = () => {
  const cartStorage = useSelector((state: RootState) => state.cart.list);
  const dispatch = useDispatch();
  const favoritesStorage = useSelector(
    (state: RootState) => state.favorites.list,
  );

  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }

  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]');
  }

  useEffect(() => {
    fetchData().then(data => {
      dispatch(set(data));
    });
  }, [dispatch]);

  return (

    <div className={style.app}>
      <Header
        cartCount={cartStorage.length}
        favoriteCount={favoritesStorage.length}
      />
      <div data-cy="app" className={style.MainContainer}>

        <Outlet />
      </div>

      <Footer />
    </div>

  );
};
