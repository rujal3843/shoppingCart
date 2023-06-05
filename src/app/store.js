import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./ShopApi";
import { authApi } from './authApi';
import cartReducer from '../Features/cartSlice'

export const store = configureStore({
  reducer:{
    allCart: cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat([
    shopApi.middleware,
    authApi.middleware,
  ]),
})
