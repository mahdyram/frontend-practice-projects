import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push({ name: action.payload, id: uuidv4() });
    },

    removeUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
