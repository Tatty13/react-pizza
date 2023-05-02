import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategoryId: 0,
  activeSortOption: {
    name: 'популярности ↓',
    sortValue: 'rating',
    order: 'desc',
  },
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
  },
});

const { setActiveCategoryId, setActiveSortOption } = filterSlice.actions;
export { filterSlice, setActiveCategoryId, setActiveSortOption };
export default filterSlice.reducer;
