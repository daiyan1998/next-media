"use client";
import { apiSlice } from "./services/apiSlice";
import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./features/postSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    post: postSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
