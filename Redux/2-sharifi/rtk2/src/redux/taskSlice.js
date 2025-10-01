import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ name: action.payload, id: uuidv4() });
    },

    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
