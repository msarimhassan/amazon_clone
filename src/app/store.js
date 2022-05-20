import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./itemcounter/CounterSlice";
import cartReducer from "./CartHandler/CartSlice";

export const store= configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer
    },
})