import './CardPrices.scss';

type Props = {
  price: string,
  priceActual: string,
};

export const CardPrices: React.FC<Props> = ({ price, priceActual }) => {
  return (
    <div className="card--price">
      {+priceActual !== +price ? (
        <>
          <p className="card--price-current">
            {`$${priceActual}`}
          </p>
          <strong className="card--price-maxPrice">
            {`$${price}`}
          </strong>
        </>

      ) : (
        <p className="card--price-current">
          {`$${priceActual}`}
        </p>
      )}
    </div>
  );
};
