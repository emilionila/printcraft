/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import style from '../../assets/catalogue.module.scss';
import { Card } from '../../components/Card/Card';
import { Loader } from '../../components/Loader';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { Pagination } from '../../components/Pagination/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Search } from '../../components/SearchComponent/Search';
import { Product } from '../../types/product';
import { SERVER_HOST, searchProductList } from '../../utils/helpers';
import { NotFoundSearchItems } from '../../components/NotFoundSearchItems/NotFoundSearchItems';

export const AccessoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [accessoriesList, setAccessoriesList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [serchParams, setSearchParams] = useSearchParams();
  const currentUrl = new URLSearchParams(serchParams);
  const sortBy = currentUrl.get('sortBy') || 'year';
  const order = currentUrl.get('sort') || 'DESC';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`${SERVER_HOST}/products?categoryId=3&sort=${order}&sortBy=${sortBy}`);

        setAccessoriesList(response.data);
      } catch (error) {
        throw new Error('error when fetching data from API');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sortBy, order]);

  const handleSortFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    currentUrl.set('sortBy', event.target.value);
    setSearchParams(currentUrl);
  };

  const handleSortOrder = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    currentUrl.set('sort', event.target.value);
    setSearchParams(currentUrl);
  };

  const handleSortPostCount = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPostPerPage(+event.target.value);
  };

  const visibleProduct = searchProductList(accessoriesList, searchQuery);

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItems = visibleProduct.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.CataloguePage}>
      <Breadcrumbs />

      <h1 className={style.CataloguePage__title}>
        Accessories Page
      </h1>

      <p className={style.CataloguePage__CatalogueCount}>
        {`${accessoriesList.length} models`}
      </p>

      <SortPanel
        onSortField={handleSortFieldChange}
        selectedSortField={sortBy}
        selectedSortOrder={order}
        onSelectOrder={handleSortOrder}
        onSelectPerPage={handleSortPostCount}
        postPerPage={postPerPage}
      />

      <Search
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {currentItems.length > 0 ? (
            <div className={style.CataloguePage__container}>
              {currentItems.map(product => (
                <Card
                  key={product.name}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <NotFoundSearchItems />
          )}

          {visibleProduct.length > postPerPage ? (
            <Pagination
              postPorPage={postPerPage}
              totalPost={visibleProduct.length}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          ) : (
            <span />
          )}
        </>
      )}
    </div>
  );
};
