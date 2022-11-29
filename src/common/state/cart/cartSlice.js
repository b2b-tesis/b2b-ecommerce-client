import {createSlice} from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const cartSlice = createSlice({
  name: 'CART',
  initialState: {cart: [], idsCart: []},
  reducers: {
    setAddToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.idsCart = [...state.idsCart, Number(action.payload.idProduct)];
      Cookie.set('cartb2b', JSON.stringify(state.cart));
      Cookie.set('cartidb2b', JSON.stringify(state.idsCart));
    },

    removeAndUpdateProduct : (state, action) => {
     state.cart = state.cart.filter(prod => prod.idProduct !== action.payload.idProduct);
     state.cart = [...state.cart, action.payload]; 
     Cookie.set('cartb2b', JSON.stringify(state.cart));

     state.idsCart = state.idsCart.filter(prod => prod !== action.payload.idProduct);
     state.idsCart = [...state.idsCart, Number(action.payload.idProduct)]; 
     Cookie.set('cartidb2b', JSON.stringify(state.idsCart));
    },

    setCart : (state) => {
      const cookieProducts = Cookie.get('cartb2b') ? JSON.parse( Cookie.get('cartb2b') ) : []
      state.cart = [...cookieProducts];

      const idProducts = cookieProducts.map(prod => {return prod.idProduct});
      state.idsCart = [...idProducts];
    },

    deleteProductCart : (state, action) => {
      state.cart = state.cart.filter(prod => prod.idProduct !== action.payload);
      state.idsCart = state.idsCart.filter(prod => prod !== action.payload);
      Cookie.set('cartb2b', JSON.stringify(state.cart));
      Cookie.set('cartidb2b', JSON.stringify(state.idsCart));
    }
    
  }
});

export const {setAddToCart, removeAndUpdateProduct, setCart, deleteProductCart} = cartSlice.actions;
export default cartSlice.reducer;
