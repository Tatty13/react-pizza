import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { PizzaBlockProps } from '../../@types/types';
import { FetchPizzasParams } from './types';

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
