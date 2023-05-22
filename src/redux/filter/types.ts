import { SortOption } from '../../@types/types';

export interface IFilterSliceState {
  activeCategoryId: number;
  activeSortOption: SortOption;
  activePage: number;
  searchValue?: string;
}
