import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';

const store = configureStore({
  reducer: {
    filter,
  },
});

export { store };
