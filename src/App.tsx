import { useRef, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import Home from './pages/Home';

import { useAppDispatch } from './redux/store';
import { setCart } from './redux/cart/slice';
import getCartFromLS from './utils/getCartFromLS';

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = lazy(
  () => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza')
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound')
);

function App() {
  const isMounted = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isMounted.current) {
      dispatch(setCart(getCartFromLS()));
    } else {
      isMounted.current = true;
    }
  }, [dispatch]);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/cart'
              element={<Cart />}
            />
            <Route
              path='/pizzas/:id'
              element={<FullPizza />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
