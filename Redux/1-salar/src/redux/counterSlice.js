import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.amount;
    },
  },
});
