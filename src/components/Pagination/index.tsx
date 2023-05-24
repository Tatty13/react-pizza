import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  setActivePage: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, setActivePage }) => {
    return (
      <ReactPaginate
        className={styles.paginate}
        breakLabel='...'
        nextLabel='>'
        onPageChange={({ selected }) => setActivePage(selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel='<'
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
      />
    );
  }
);
