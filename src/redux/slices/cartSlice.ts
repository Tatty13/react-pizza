import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { CartItemProps } from '../../@types/types';
import type { RootState } from '../store';

interface ICartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItemProps[];
}

type CartItemDataToChange = {
  id: string;
  type: string;
  price: number;
  size: number;
};

const initialState: ICartSliceState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemProps>) {
      const { id, price, type, size } = action.payload;
      const findedItems = state.items.find(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.type === type &&
          item.size === size
      );

      findedItems ? findedItems.count++ : state.items.push(action.payload);
      state.totalPrice += price;
      state.totalCount++;
    },

    increaseItemCount(state, action: PayloadAction<CartItemDataToChange>) {
      const { id, price, type, size } = action.payload;
      const findedItems = state.items.find(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.type === type &&
          item.size === size
      );

      if (findedItems) {
        findedItems.count++;
        state.totalPrice += price;
        state.totalCount++;
      }
    },

    removeItem(state, action: PayloadAction<CartItemDataToChange>) {
      const { id, price, type, size } = action.payload;
      const findedItems = state.items.find(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.type === type &&
          item.size === size
      );

      if (findedItems)
        if (findedItems.count > 1) {
          findedItems.count--;
        } else {
          const idx = state.items.indexOf(findedItems);
          state.items.splice(idx, 1);
        }

      state.totalPrice -= action.payload.price;
      state.totalCount--;
    },

    removeItemType(state, action: PayloadAction<CartItemDataToChange>) {
      const { id, price, type, size } = action.payload;
      const findedItem = state.items.find(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.type === type &&
          item.size === size
      );

      if (findedItem) {
        const idx = state.items.indexOf(findedItem);
        state.items.splice(idx, 1);

        state.totalCount -= findedItem.count;
        state.totalPrice -= findedItem.count * findedItem.price;
      }
    },

    removeAllItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectItemsById = (id: string) => (state: RootState) =>
  state.cart.items.filter((item) => item.id === id);

export const {
  addItem,
  increaseItemCount,
  removeItem,
  removeAllItems,
  removeItemType,
} = cartSlice.actions;

export default cartSlice.reducer;
