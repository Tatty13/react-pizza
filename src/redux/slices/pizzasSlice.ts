import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import type { RootState } from '../store';
import type { PizzaBlockProps } from '../../@types/types';

// type FetchPizzasParams = {
//   page: string;
//   category: string;
//   sortBy: string;
//   order: string;
//   search: string;
// };

type FetchPizzasParams = Record<string, string>;

export const fetchPizzas = createAsyncThunk<
  PizzaBlockProps[],
  FetchPizzasParams
>(
  'pizzas/fetchPizzasAsync',
  async ({ page, category, sortBy, order, search }) => {
    const { data } = await axios.get<PizzaBlockProps[]>(
      `https://64428d4c76540ce2258f62b6.mockapi.io/items?${page}&limit=4&${category}&${sortBy}&${order}${search}`
    );

    return data;
  }
);

interface IPizzaSliceState {
  items: PizzaBlockProps[];
  isLoading: boolean;
  fetchStatus: 'loading' | 'success' | 'error';
}

const initialState: IPizzaSliceState = {
  items: [],
  isLoading: true,
  fetchStatus: 'loading',
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
      state.fetchStatus = 'loading';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.fetchStatus = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.items = [];
      state.isLoading = false;
      state.fetchStatus = 'error';
    });
  },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
