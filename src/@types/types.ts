export type SortOption = {
  name: string;
  sortValue: string;
  order: 'desc' | 'ask';
};

export type CartItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  type: string;
  price: number;
  size: number;
  count: number;
};

export type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
