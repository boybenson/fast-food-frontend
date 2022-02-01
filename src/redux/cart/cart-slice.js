import { createSlice } from "@reduxjs/toolkit";

const fetchCartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: fetchCartItemsFromLocalStorage,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, { payload }) => {
      const newCartItems = state.cartItems.filter((item) => {
        return item.id !== payload.id;
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
