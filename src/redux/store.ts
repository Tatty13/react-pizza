import { configureStore } from '@reduxjs/toolkit';

import filter from './filter/slice';
import cart from './slices/cartSlice';
import pizzas from './slices/pizzasSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    filter,
    cart,
    pizzas,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { store };
