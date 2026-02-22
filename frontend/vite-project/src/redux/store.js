import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../redux/userSlice";
import  authReducer from "../redux/authSlice";

export const store = configureStore({
    reducer:{
        user:userReducer,
        posts:authReducer
    }
})