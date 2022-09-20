import {createSlice} from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'TOAST',
  initialState: {toastMessage: '', showToast: false, severity:''},
  reducers: {
    showToastify: (state, action) => {
      state.severity = action.payload.severity
      state.toastMessage = action.payload.message;
      state.showToast = true;
    },
    closeToastify: (state) => {
      state.showToast = false;
      state.toastMessage = '';
      state.severity = '';
    },
  }
});

export const {showToastify, closeToastify} = toastSlice.actions;
export default toastSlice.reducer;
