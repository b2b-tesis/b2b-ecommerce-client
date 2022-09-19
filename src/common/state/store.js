import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/authSlice';
import LoadingReducer from './loading/loadingSlice';
import ErrorReducer from './error/errorSlice';

export default configureStore({
    reducer:{
        auth:AuthReducer,
        loading:LoadingReducer,
        error:ErrorReducer
    }
})