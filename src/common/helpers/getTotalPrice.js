
export const getTotalPrice = (cart) => {
  return cart.reduce((accum, item) => accum + item.priceProduct * item.quantityProduct, 0);
};


export const getTotalPriceSale = (items) => {
  return items.reduce((accum, item) => accum + item.product.price * item.amount, 0);
};
