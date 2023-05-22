import { PizzaBlockProps } from '../../@types/types';

export type FetchPizzasParams = {
  page: string;
  category: string;
  sortBy: string;
  order: string;
  search: string;
};

// type FetchPizzasParams = Record<string, string>;

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IPizzaSliceState {
  items: PizzaBlockProps[];
  isLoading: boolean;
  fetchStatus: Status;
}
