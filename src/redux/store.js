import { configureStore } from "@reduxjs/toolkit";
import signinReducer from "./auth/signin";

export const store = configureStore({
  reducer: {
    signin: signinReducer,
  },
});
