import { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import ErrorInfo from '../components/ErrorInfo';

import {
  selectFilter,
  setActiveCategoryId,
  setActivePage,
  setFilters,
} from '../redux/slices/filterSlice';
import { fetchPizzas, selectPizzas } from '../redux/slices/pizzasSlice';

import sortOptions from '../utils/sortOptions';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { activeCategoryId, activeSortOption, activePage, searchValue } =
    useSelector(selectFilter);
  const { items, fetchStatus } = useSelector(selectPizzas);

  const handleCategoryClick = (id) => {
    dispatch(setActiveCategoryId(id));
  };

  const handlePageChange = (id) => {
    dispatch(setActivePage(id));
  };

  const getPizzas = useCallback(async () => {
    const page = `page=${activePage}`;
    const category = activeCategoryId ? `&category=${activeCategoryId}` : '';
    const sortBy = `sortBy=${activeSortOption.sortValue}`;
    const order = `order=${activeSortOption.order}`;
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({ page, category, sortBy, order, search }));
  }, [activeCategoryId, activeSortOption, activePage, searchValue, dispatch]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortOption = sortOptions.find(
        (opt) =>
          opt.sortValue === params.sortValue && opt.order === params.sortOrder
      );

      dispatch(setFilters({ ...params, sortOption }));
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [activeCategoryId, activeSortOption, searchValue, activePage, getPizzas]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortOrder: activeSortOption.order,
        sortValue: activeSortOption.sortValue,
        activeCategoryId,
        activePage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeCategoryId, activeSortOption, activePage, navigate]);

  const pizzasBlocksElems = items.map((pizza) => (
    <PizzaBlock
      key={pizza.id}
      {...pizza}
    />
  ));

  const skeletonElems = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeIdx={activeCategoryId}
          setActiveIdx={handleCategoryClick}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>

      {fetchStatus === 'error' ? (
        <ErrorInfo />
      ) : (
        <div className='content__items'>
          {fetchStatus === 'loading' ? skeletonElems : pizzasBlocksElems}
        </div>
      )}

      <Pagination
        currentPage={activePage}
        setActivePage={handlePageChange}
      />
    </div>
  );
}

export default Home;
