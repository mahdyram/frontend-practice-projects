import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },

    increment: (state) => {
      state.value += 1;
    },
  },
});

export default counterSlice;
