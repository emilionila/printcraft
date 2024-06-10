import style from '../../assets/catalogue.module.scss';

export const NotFoundSearchItems = () => (
  <div className={style.NotFondProduct}>
    <h1 className={style.CataloguePage__title}>
      Sorry, no results found.
    </h1>
    <img
      src="https://media1.tenor.com/m/w0ZPbbkuLNkAAAAC/retail-john-travolta.gif"
      alt="travolta"
      className={style.NotFondProduct_img}
    />
  </div>
);
