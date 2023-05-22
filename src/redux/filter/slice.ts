import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFilterSliceState } from './types';
import { Orders, SortOption, SortValues } from '../../@types/types';

const initialState: IFilterSliceState = {
  activeCategoryId: 0,
  activeSortOption: {
    name: 'популярности ↓',
    sortValue: SortValues.RATING,
    order: Orders.DESC,
  },
  activePage: 1,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategoryId(state, action: PayloadAction<number>) {
      state.activeCategoryId = action.payload;
    },
    setActiveSortOption(state, action: PayloadAction<SortOption>) {
      state.activeSortOption = action.payload;
    },
    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      const { activePage, activeCategoryId, activeSortOption } = action.payload;
      state.activePage = activePage;
      state.activeCategoryId = activeCategoryId;
      state.activeSortOption = activeSortOption;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setActiveCategoryId,
  setActiveSortOption,
  setActivePage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
