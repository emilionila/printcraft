import React from 'react';
import classNames from 'classnames';

import './Pagination.scss';
import nextPage from '../../icons/Slider_button.png';
import { scrollToTop } from '../../utils/helpers';

type Props = {
  postPorPage: number;
  totalPost: number;
  onPageChange: (page: number) => void;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({
  postPorPage,
  totalPost,
  onPageChange,
  currentPage,
}) => {
  const pages: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPorPage); i += 1) {
    pages.push(i);
  }

  const handleChangeNextPage = () => {
    if (currentPage < Math.ceil(totalPost / postPorPage)) {
      onPageChange(currentPage + 1);
    }
  };

  const handleChangePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="Pagination">
      <button
        className="Pagination--button-next"
        type="submit"
        onClick={() => {
          handleChangePrevPage();
          scrollToTop();
        }}
      >
        <img
          src={nextPage}
          alt="Next Page Button"
        />
      </button>

      {currentPage > 2 && (
        <>
          <button
            onClick={() => {
              onPageChange(1);
              scrollToTop();
            }}
            type="button"
            className="Pagination--button"
          >
            1
          </button>
          <span>...</span>
        </>
      )}

      {currentPage === 1 ? (
        pages.slice(currentPage - 1, currentPage + 3).map(page => (
          <button
            key={page}
            onClick={() => {
              onPageChange(page);
              scrollToTop();
            }}
            type="button"
            className={classNames(
              'Pagination--button',
              { isActive: page === currentPage },
            )}
          >
            {page}
          </button>
        ))
      ) : (
        pages.slice(currentPage - 2, currentPage + 3).map(page => (
          <button
            key={page}
            onClick={() => {
              onPageChange(page);
              scrollToTop();
            }}
            type="button"
            className={classNames(
              'Pagination--button',
              { isActive: page === currentPage },
            )}
          >
            {page}
          </button>
        ))
      )}

      {currentPage <= pages[pages.length - 5] ? (
        <>
          <span>...</span>

          <button
            onClick={() => {
              onPageChange(pages[pages.length - 1]);
              scrollToTop();
            }}
            type="button"
            className="Pagination--button"
          >
            {pages[pages.length - 1]}
          </button>
        </>
      ) : (<span />)}

      <button
        className="Pagination--button-back"
        type="submit"
        onClick={() => {
          handleChangeNextPage();
          scrollToTop();
        }}
      >
        <img
          src={nextPage}
          alt="Next Page Button"
        />
      </button>
    </div>
  );
};
