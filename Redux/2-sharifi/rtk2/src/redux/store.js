import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    tasks: taskReducer,
  },
});
