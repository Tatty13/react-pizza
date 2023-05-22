import { CartItemProps } from '../../@types/types';

export interface ICartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItemProps[];
}

export type CartItemDataToChange = {
  id: string;
  type: string;
  price: number;
  size: number;
};
