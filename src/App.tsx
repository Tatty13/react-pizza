import { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';

import { useAppDispatch } from './redux/store';
import { setCart } from './redux/slices/cartSlice';
import getCartFromLS from './utils/getCartFromLS';

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
      </div>
    </div>
  );
}

export default App;
