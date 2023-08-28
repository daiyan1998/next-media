import { POSTS_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: POSTS_URL,
      }),
      keepUnusedDataFor: 10,
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: POSTS_URL,
        method: "POST",
        body: post,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: POSTS_URL,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const { useAddPostMutation, useGetPostsQuery, useDeletePostMutation } =
  postApiSlice;
