import { createSlice } from "@reduxjs/toolkit";

const fetchUserInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: fetchUserInfoFromLocalStorage,
  error: null,
};

export const signInSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signin: (state, action) => {
      state.userInfo = action.payload;
      state.error = null;
    },
    signinError: (state, action) => {
      state.userInfo = null;
      state.error = action.payload;
    },
    signOut: (state, action) => {
      state.userInfo = null;
      state.error = null;
    },
  },
});

export const { signin, signinError, signOut } = signInSlice.actions;

export default signInSlice.reducer;
