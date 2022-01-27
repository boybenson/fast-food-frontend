import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./auth/signin";

export const store = configureStore({
  reducer: {
    user: signinReducer,
  },
});
