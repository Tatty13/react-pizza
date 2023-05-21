export enum SortValues {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export enum Orders {
  DESC = 'desc',
  ASK = 'ask',
}

export type SortOption = {
  name: string;
  sortValue: SortValues;
  order: Orders;
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
