import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/authSlice';
import LoadingReducer from './loading/loadingSlice';
import ToastReducer from './toast/toastSlice';

export default configureStore({
    reducer:{
        auth:AuthReducer,
        loading:LoadingReducer,
        toast:ToastReducer
    }
})