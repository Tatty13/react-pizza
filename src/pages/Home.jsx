import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home({ searchValue }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSortOption, setActiveSortOption] = useState({
    name: 'популярности ↓',
    sortValue: 'rating',
    order: 'desc',
  });
  const [activeCategoryId, setActiveCategoryId] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const category = activeCategoryId ? `&category=${activeCategoryId}` : '';
    const sortBy = `sortBy=${activeSortOption.sortValue}`;
    const order = `order=${activeSortOption.order}`;
    const search = searchValue ? `&search=${searchValue}` : '';
    fetch(
      `https://64428d4c76540ce2258f62b6.mockapi.io/items?${category}&${sortBy}&${order}${search}`
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(
              `Упс! Кажется, что-то пошло не так. Ошибка ${res.status}: данные не получены.`
            )
      )
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [activeCategoryId, activeSortOption, searchValue]);

  const pizzasBlocksElems = items.map((pizza) => (
    <PizzaBlock
      key={pizza.id}
      {...pizza}
    />
  ));

  //static search
  // const pizzasBlocksElems = items
  //   .filter((pizza) =>
  //     pizza.title.toLowerCase().includes(searchValue.toLowerCase())
  //   )
  //   .map((pizza) => (
  //     <PizzaBlock
  //       key={pizza.id}
  //       {...pizza}
  //     />
  //   ));

  const skeletonElems = [...new Array(6)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeIdx={activeCategoryId}
          setActiveIdx={setActiveCategoryId}
        />
        <Sort
          activeOption={activeSortOption}
          setActiveOption={setActiveSortOption}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading ? skeletonElems : pizzasBlocksElems}
      </div>
    </div>
  );
}

export default Home;
