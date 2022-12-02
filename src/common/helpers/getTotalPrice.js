
export const getTotalPrice = (cart) => {
  return cart.reduce((accum, item) => accum + item.priceProduct * item.quantityProduct, 0);
};
