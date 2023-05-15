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

    removeAllItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = cartSlice.actions;

export default cartSlice.reducer;
