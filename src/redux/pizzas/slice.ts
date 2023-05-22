import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { PizzaBlockProps } from '../../@types/types';
import { IPizzaSliceState, Status } from './types';

import { fetchPizzas } from './asyncActions';

const initialState: IPizzaSliceState = {
  items: [],
  isLoading: true,
  fetchStatus: Status.LOADING,
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,

  reducers: {
    setItems(state, action: PayloadAction<PizzaBlockProps[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.isLoading = true;
      state.fetchStatus = Status.LOADING;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.fetchStatus = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.isLoading = false;
      state.fetchStatus = Status.ERROR;
    });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
