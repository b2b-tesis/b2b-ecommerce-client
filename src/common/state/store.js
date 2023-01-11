import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/authSlice';
import LoadingReducer from './loading/loadingSlice';
import ToastReducer from './toast/toastSlice';
import ProductReducer from './product/productSlice';
import CartReducer from './cart/cartSlice';
import OrderReducer from './order/orderSlice';
import ChatReducer from './chat/chatSlice';

export default configureStore({
    reducer:{
        auth:AuthReducer,
        loading:LoadingReducer,
        toast:ToastReducer,
        product:ProductReducer,
        cart:CartReducer,
        order:OrderReducer,
        chat:ChatReducer 
    }
})