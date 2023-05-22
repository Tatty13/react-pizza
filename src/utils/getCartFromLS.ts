const getCartFromLS = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  }
  return {};
};

export default getCartFromLS;
