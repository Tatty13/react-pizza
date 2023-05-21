export type SortOption = {
  name: string;
  sortValue: 'rating' | 'price' | 'title';
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
  imageUrl: string;
  types: number[];
  price: number;
  sizes: number[];
};
