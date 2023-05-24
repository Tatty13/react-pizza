import { initialState } from '../redux/cart/slice';
import { ICartSliceState } from '../redux/cart/types';

const getCartFromLS = (): ICartSliceState => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return initialState;
};

export default getCartFromLS;
