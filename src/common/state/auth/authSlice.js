import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'AUTH',
    initialState:{ 
        // post:[],
        // loading:false,
        // error:null,
        // edit:false,
        // body:""
    },
    reducers:{
        // setEdit: (state, action) => {
        //     state.edit = action.payload.edit;
        //     state.body = action.payload.body;
        // }
    }
});

// export const {setEdit} = postSlice.actions;

export default authSlice.reducer;