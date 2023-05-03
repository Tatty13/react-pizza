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
  },
});

const { setActiveCategoryId, setActiveSortOption, setActivePage } =
  filterSlice.actions;
export { filterSlice, setActiveCategoryId, setActiveSortOption, setActivePage };
export default filterSlice.reducer;
