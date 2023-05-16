import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
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

    removeItem(state, action) {
      const { id, price, type, size } = action.payload;
      const findedItems = state.items.find(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.type === type &&
          item.size === size
      );

      if (findedItems.count > 1) {
        findedItems.count--;
      } else {
        const idx = state.items.indexOf(findedItems);
        state.items.splice(idx, 1);
      }

      state.totalPrice -= action.payload.price;
      state.totalCount--;
    },

    removeItemType(state, action) {
      const { id, price, type, size } = action.payload;
      const findedItem = state.items.find(
        (item) =>
          item.id === id &&
          item.price === price &&
          item.type === type &&
          item.size === size
      );

      const idx = state.items.indexOf(findedItem);
      state.items.splice(idx, 1);

      state.totalCount -= findedItem.count;
      state.totalPrice -= findedItem.count * findedItem.price;
    },

    removeAllItems(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, removeAllItems, removeItemType } =
  cartSlice.actions;

export default cartSlice.reducer;
