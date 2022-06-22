import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./itemcounter/CounterSlice";
import cartReducer from "./CartHandler/CartSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {combineReducers} from 'redux';

const persistConfig={
  key:'root',
  version:1,
  storage

};

const reducer=combineReducers({
    cart:cartReducer,
      counter:counterReducer
})

const persistedReducer=persistReducer(persistConfig,reducer);

export const store= configureStore({
    reducer:persistedReducer,
})