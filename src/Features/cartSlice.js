import { createSlice } from "@reduxjs/toolkit";
import { addUser, clearAll, getUser } from "./LocalStorage";

const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
  user: getUser(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      addUser(state.user);
    },

    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
    
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ id, title, price, image, quantity: 1 });
      }
    },
    

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    clearCart(state, action) {
      state.cart = [];
    },

    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    clearData: (state, action) => {
      state.user = null;
      state.cart = [];
      clearAll();
    },

   

  },
});


   
 

export const {setUser, addToCart, removeItem,clearCart,addquantity,incrementQuantity,decrementQuantity,clearData} = cartSlice.actions;

export default cartSlice.reducer;