import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

function Pagination({ currentPage, setActivePage }) {
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

export default Pagination;
