import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { CartItemProps } from '../../@types/types';
import { CartItemDataToChange, ICartSliceState } from './types';

export const initialState: ICartSliceState = {
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

    setCart(state, action: PayloadAction<ICartSliceState>) {
      const { items, totalCount, totalPrice } = action.payload;

      state.items = items;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addItem,
  increaseItemCount,
  removeItem,
  removeAllItems,
  removeItemType,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;
