import {createSlice} from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'LOADING',
  initialState: {loading: false, loading2:false, loading3:false},
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setLoading2: (state) => {
      state.loading2 = !state.loading2;
    },
    setLoading3: (state) => {
      state.loading3 = !state.loading3;
    }
  }
});

export const {setLoading, setLoading2, setLoading3} = loadingSlice.actions;
export default loadingSlice.reducer;
