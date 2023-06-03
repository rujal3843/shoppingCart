import { configureStore } from "@reduxjs/toolkit";
import { shopApi } from "./ShopApi";

export const store = configureStore({
  reducer:{
    [shopApi.reducerPath]: shopApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware),
})