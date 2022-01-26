import { createSlice } from "@reduxjs/toolkit";

const fetchUserInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: fetchUserInfoFromLocalStorage,
  error: null,
};

export const signInSlice = createSlice({
  name: "counter",
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
  },
});

export const { signin, signinError } = signInSlice.actions;

export default signInSlice.reducer;
