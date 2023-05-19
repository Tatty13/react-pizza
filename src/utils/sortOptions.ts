import type { SortOption } from '../@types/types';

const sortOptions: SortOption[] = [
  { name: 'популярности ↓', sortValue: 'rating', order: 'desc' },
  { name: 'популярности ↑', sortValue: 'rating', order: 'ask' },
  { name: 'цене ↓', sortValue: 'price', order: 'desc' },
  { name: 'цене ↑', sortValue: 'price', order: 'ask' },
  { name: 'алфавиту ↓', sortValue: 'title', order: 'desc' },
  { name: 'алфавиту ↑', sortValue: 'title', order: 'ask' },
];

export default sortOptions;
