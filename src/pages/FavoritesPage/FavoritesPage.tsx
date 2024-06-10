import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../assets/catalogue.module.scss';
import { Card } from '../../components/Card/Card';
import { EmptyFavorites } from '../../components/EmptyFavorites/EmptyFavorites';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { RootState } from '../../redux/store/store';
import { clearFavorites } from '../../redux/reducers/favoriteSlice';
import { SERVER_HOST } from '../../utils/helpers';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesStorage = useSelector(
    (state: RootState) => state.favorites.list,
  );
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    axios.get(`${SERVER_HOST}/favourites/getFavourites`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }, [jwt]);

  const handleClearCart = () => {
    dispatch(clearFavorites());
    localStorage.removeItem('favorites');
  };

  return (
    <div className={style.CataloguePage}>
      <Breadcrumbs />

      <div className={style.favoritePage__top}>
        <h1 className={style.CataloguePage__title}>
          Favorites
        </h1>

        {favoritesStorage.length > 0 && (
          <button
            type="button"
            className={style.favoritePage__clear}
            onClick={handleClearCart}
          >
            Remove all
          </button>
        )}
      </div>

      {favoritesStorage.length !== 0 && (
        <p className={style.CataloguePage__CatalogueCount}>
          {(favoritesStorage.length === 1)
            ? (`${favoritesStorage.length} item`)
            : (`${favoritesStorage.length} items`)}
        </p>
      )}

      {!favoritesStorage.length && (
        <EmptyFavorites />
      )}
      <div className={style.CataloguePage__container}>
        {favoritesStorage.map(product => (
          <Card
            key={product.name}
            product={product}
          />
        ))}
      </div>

    </div>
  );
};
