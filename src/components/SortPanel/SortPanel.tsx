import { ChangeEvent } from 'react';
import './SortPanel.scss';

type Props = {
  onSortField: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedSortField: string;
  selectedSortOrder: string;
  onSelectOrder: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSelectPerPage: (event: ChangeEvent<HTMLSelectElement>) => void;
  postPerPage: number;
};

const sortOptions = {
  Years: 'year',
  Price: 'priceActual',
  Screen: 'screen',
  Ram: 'ram',
  Capacity: 'capacity',
};

const countPerPageOptions = {
  12: 12,
  24: 24,
  36: 36,
};

const sortOrderOptions = {
  Ascending: 'ASC',
  Descending: 'DESC',
};

export const SortPanel: React.FC<Props> = ({
  onSortField,
  selectedSortField,
  selectedSortOrder,
  onSelectOrder,
  onSelectPerPage,
  postPerPage,
}) => {
  return (
    <div className="SortPanel">
      {/*<div>*/}
      {/*  <p className="SortPanel--title">Sort by</p>*/}
      {/*  <select*/}
      {/*    className="SortPanel--fields"*/}
      {/*    value={selectedSortField}*/}
      {/*    onChange={onSortField}*/}
      {/*  >*/}
      {/*    {Object.entries(sortOptions).map(([label, value]) => (*/}
      {/*      <option key={value} value={value}>*/}
      {/*        {label}*/}
      {/*      </option>*/}
      {/*    ))}*/}
      {/*  </select>*/}
      {/*</div>*/}

      <div>
        <p className="SortPanel--title">Items on page</p>
        <select
          className="SortPanel--fields"
          value={postPerPage}
          onChange={onSelectPerPage}
        >
          {Object.values(countPerPageOptions).map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>

      </div>

    {/*  <div>*/}
    {/*    <p className="SortPanel--title">Order</p>*/}
    {/*    <select*/}
    {/*      className="SortPanel--fields"*/}
    {/*      value={selectedSortOrder}*/}
    {/*      onChange={onSelectOrder}*/}
    {/*    >*/}
    {/*      {Object.entries(sortOrderOptions).map(([label, value]) => (*/}
    {/*        <option key={value} value={value}>*/}
    {/*          {label}*/}
    {/*        </option>*/}
    {/*      ))}*/}
    {/*    </select>*/}
    {/*  </div>*/}
    </div>
  );
};
