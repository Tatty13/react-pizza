import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzasAsync',
  async ({ page, category, sortBy, order, search }) => {
    const { data } = await axios.get(
      `https://64428d4c76540ce2258f62b6.mockapi.io/items?${page}&limit=4&${category}&${sortBy}&${order}${search}`
    );

    return data;
  }
);

const initialState = {
  items: [],
  isLoading: true,
  fetchStatus: 'loading',
};

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,

  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      console.log('Pending!!');
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
      console.log('rejected!!');
      state.items = [];
      state.isLoading = false;
      state.fetchStatus = 'error';
    });
  },
});

export const selectPizzas = (state) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
