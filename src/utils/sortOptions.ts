import { Orders, SortOption, SortValues } from '../@types/types';

const sortOptions: SortOption[] = [
  { name: 'популярности ↓', sortValue: SortValues.RATING, order: Orders.DESC },
  { name: 'популярности ↑', sortValue: SortValues.RATING, order: Orders.ASK },
  { name: 'цене ↓', sortValue: SortValues.PRICE, order: Orders.DESC },
  { name: 'цене ↑', sortValue: SortValues.PRICE, order: Orders.ASK },
  { name: 'алфавиту ↓', sortValue: SortValues.TITLE, order: Orders.DESC },
  { name: 'алфавиту ↑', sortValue: SortValues.TITLE, order: Orders.ASK },
];

export default sortOptions;
