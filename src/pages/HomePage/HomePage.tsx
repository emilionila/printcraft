import './HomePage.scss';
import { Slider } from '../../components/Slider/Slider';
import { MainPageTitle } from '../../components/MainPageTitle';
import { Carusel } from '../../components/Carusel';
import { ShopByCategory } from '../../components/ShopByCategory';
import { CaruselSort } from '../../types/CaruselSort';

export const HomePage = () => {
  return (
    <>
      <div className="mainPageContainer">
        <MainPageTitle />
      </div>

      <Slider />

      <div className="mainPageContainer">
        <Carusel
          title="New models"
          selectedSortCarusel={CaruselSort.Years}
        />
        <ShopByCategory />
        <Carusel
          title="Hot prices"
          selectedSortCarusel={CaruselSort.HotPrices}
        />
      </div>
    </>
  );
};
