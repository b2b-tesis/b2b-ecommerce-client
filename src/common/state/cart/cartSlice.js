import {createSlice} from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const cartSlice = createSlice({
  name: 'CART',
  initialState: {cart: []},
  reducers: {
    setAddToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      Cookie.set('cartb2b', JSON.stringify(state.cart));

    },

    removeAndUpdateProduct : (state, action) => {
     state.cart = state.cart.filter(prod => prod.idProduct !== action.payload.idProduct);
     state.cart = [...state.cart, action.payload]; 
     Cookie.set('cartb2b', JSON.stringify(state.cart));
    },

    setCart : (state) => {
      const cookieProducts = Cookie.get('cartb2b') ? JSON.parse( Cookie.get('cartb2b') ) : []
      state.cart = [...cookieProducts];
    }
  }
});

export const {setAddToCart, removeAndUpdateProduct, setCart} = cartSlice.actions;
export default cartSlice.reducer;
