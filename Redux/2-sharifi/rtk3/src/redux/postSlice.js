import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postFetch = createAsyncThunk(
  "posts/fetchPosts",

  async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    } catch (err) {
      console.error("Axios request failed:", err);
      throw err;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: { posts: [], status: "idle", error: null },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(postFetch.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postFetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(postFetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
