import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userReducer,
  },
});
