import {createSlice} from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'LOADING',
  initialState: {loading: false},
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    }
  }
});

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;
