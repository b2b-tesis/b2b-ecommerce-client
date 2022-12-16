import {createSlice} from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'ORDER',
  initialState: {orderItems:[], total: 0, productEdit:{}},
  reducers: {
    setOrder: (state, action) => {
      state.orderItems = action.payload.items;
    },
    deleteProduct: (state, action) => {
      console.log(action.payload);
      
      state.orderItems = state.orderItems.filter(item => item.product.id !== action.payload);
    },
    setTotal: (state) => {
      state.total = state.orderItems.reduce((accum, item) => accum + item.product.price * item.amount, 0);
    },
    setProductToEdit: (state, action) => {
      state.productEdit = state.orderItems.find((item) => item.product.id === action.payload);
    },
    setEmptyProductEdit:(state,) =>{
      state.productEdit = {}
    },
    setEditAmountProduct: (state, action) =>{
      state.productEdit.amount = Number(action.payload.quantityProduct); 
      state.orderItems = state.orderItems.map(item => {
        if (item.product.id === state.productEdit.product.id){
          return{product:item.product, amount:state.productEdit.amount}
        }
        return item
      }) 
    }
  }
});

export const {setOrder, deleteProduct, setTotal, setProductToEdit, setEditAmountProduct, setEmptyProductEdit} = orderSlice.actions;
export default orderSlice.reducer;
