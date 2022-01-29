import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./auth/signin";
import cartReducer from "./cart/cart-slice";

export const store = configureStore({
  reducer: {
    user: signinReducer,
    cart: cartReducer,
  },
});
