import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
  },
  reducers: {
    addPost: (state, action) => {},
  },
});

export default postSlice.reducer;
