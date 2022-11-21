import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'PRODUCT',
  initialState: {productResult: []},
  reducers: {
    setProductResult: (state, action) => {
      state.productResult = action.payload;
    }
  }
});

export const {setProductResult} = productSlice.actions;
export default productSlice.reducer;
