/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import detailsStyles from './ProductDetailsPage.module.scss';
import { ProductTitle } from '../../components/ProductTitle';
import {
  AboutProduct,
} from '../../components/AboutProduct/AboutProduct';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductImagesSlider } from '../../components/ProductImagesSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ProductVariants } from '../../components/ProductVariants/ProductVariants';
import { Carusel } from '../../components/Carusel';
import { CaruselSort } from '../../types/CaruselSort';
import { BackButton } from '../../components/BackButton';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '../../types/product';
import notFoundImg from '../../images/not found.jpg';

export const ProductDetailsPage = () => {
  const [currentProduct, setCurrentProduct] = useState<Product[]>();
  const [, setIsLoading] = useState(true);

  const queris = useLocation();
  const searchParams = new URLSearchParams(queris.search);
  const productId = searchParams.get('productId');
  const color = searchParams.get('color');

  const requestedPhone = `?productId=${productId}&color=${color}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(requestedPhone);

        setCurrentProduct(response.data);
      } catch (error) {
        throw new Error('error when fetching data from API');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [requestedPhone]);

  return (
    <>
      <div className={detailsStyles.container}>
        {currentProduct && (
          <>
            <Breadcrumbs />
            <BackButton />
            <ProductTitle title={currentProduct[0]} />
            <div className={detailsStyles.extendedDetails}>
              <div className={detailsStyles.topContent}>
                {currentProduct[0].images ? (
                  <div className={detailsStyles.extendedDetails__pictures}>
                    <ProductImagesSlider images={currentProduct[0].images} />
                  </div>
                ) : (
                  <div className={detailsStyles.extendedDetails__pictures}>
                    <ProductImagesSlider images={[notFoundImg]} />
                  </div>
                )}

                <div className={detailsStyles.extendedDetails__mainInfo}>
                  <ProductVariants product={currentProduct[0]} />
                </div>
              </div>

              <div className={detailsStyles.bottomContent}>
                <div className={detailsStyles.extendedDetails__about}>
                  <AboutProduct product={currentProduct} />

                </div>
                <div className={detailsStyles.extendedDetails__techSpecs}>
                  <TechSpecs
                    phone={currentProduct[0]}
                  />
                </div>
              </div>

            </div>

            <Carusel
              title="You may also like"
              selectedSortCarusel={CaruselSort.Recommended}
              categoryId={currentProduct[0].categoryId}
            />
          </>
        )}
      </div>

    </>
  );
};
