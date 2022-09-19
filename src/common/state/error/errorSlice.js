import {createSlice} from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'ERROR',
  initialState: {error: false},
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
    showToastify: (state) => {
      state.error = true;
    },
    closeToastify: (state) => {
      state.error = false;
    },
  }
});

export const {setError, showToastify, closeToastify} = errorSlice.actions;
export default errorSlice.reducer;
