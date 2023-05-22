import { RootState } from '../store';

export const selectFilter = (state: RootState) => state.filter;
export const selectActiveOption = (state: RootState) =>
  state.filter.activeSortOption;