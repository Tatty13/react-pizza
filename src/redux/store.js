import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import pizzas from './slices/pizzasSlice';

const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

export { store };
