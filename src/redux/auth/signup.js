import { createSlice } from "@reduxjs/toolkit";

const fetchUserInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: fetchUserInfoFromLocalStorage,
  error: null,
};

export const signUpSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.userInfo = action.payload;
      state.error = null;
    },
    signupError: (state, action) => {
      state.userInfo = null;
      state.error = action.payload;
    },
  },
});

export const { signup, signupError } = signUpSlice.actions;

export default signUpSlice.reducer;
