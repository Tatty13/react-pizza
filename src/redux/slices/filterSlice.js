import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryId: 0,
  activeSortOption: {
    name: 'популярности ↓',
    sortValue: 'rating',
    order: 'desc',
  },
  activePage: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategoryId(state, action) {
      state.activeCategoryId = action.payload;
    },
    setActiveSortOption(state, action) {
      state.activeSortOption = action.payload;
    },
    setActivePage(state, action) {
      state.activePage = action.payload;
    },
    setFilters(state, action) {
      const { activePage, activeCategoryId, sortOption } = action.payload;
      state.activePage = +activePage;
      state.activeCategoryId = +activeCategoryId;
      state.activeSortOption = sortOption;
    },
  },
});

export const selectFilter = state => state.filter;
export const selectActiveOption = (state) => state.filter.activeSortOption;

export const {
  setActiveCategoryId,
  setActiveSortOption,
  setActivePage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
