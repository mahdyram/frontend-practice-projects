import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "ali", children: ["negar", "sara"] },
  reducers: {
    addChild: (state, action) => {
      state.children.includes(action.payload) ||
        state.children.push(action.payload);
    },
    removeChild: (state, action) => {
      state.children = state.children.filter(
        (child) => child !== action.payload
      );
    },
  },
});

export const { addChild, removeChild } = userSlice.actions;

export default userSlice.reducer;
