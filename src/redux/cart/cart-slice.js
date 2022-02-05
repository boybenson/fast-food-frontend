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

    increaseQty: (state, { payload }) => {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          item.qtyToBuy += 1;
          return item;
        } else {
          return item;
        }
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },

    decreaseQty: (state, { payload }) => {
      const newCartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          if (item.qtyToBuy <= 1) {
            item.qtyToBuy = 1;
          } else {
            item.qtyToBuy -= 1;
          }
          return item;
        } else {
          return item;
        }
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
