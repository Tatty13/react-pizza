import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectItemsById = (id: string) => (state: RootState) =>
  state.cart.items?.filter((item) => item.id === id);
