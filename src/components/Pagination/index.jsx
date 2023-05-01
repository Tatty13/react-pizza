import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

function Pagination({ setActivePage }) {
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
    />
  );
}

export default Pagination;
