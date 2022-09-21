import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'AUTH',
    initialState:{isLoggedIn:false, user:{}},
    reducers:{
        setUser: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            
        }
    }
});

export const {setUser} = authSlice.actions;

export default authSlice.reducer;