import { useEffect, useState } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://64428d4c76540ce2258f62b6.mockapi.io/items')
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
  }, []);

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
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading ? skeletonElems : pizzasBlocksElems}
      </div>
    </div>
  );
}

export default Home;
