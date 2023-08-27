import { apiSlice } from "./apiSlice";
import { USERS_URL } from "./../../constants";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveUser: builder.query({
      query: () => ({
        url: `${USERS_URL}/activeUser`,
      }),
      keepUnusedDataFor: 10,
    }),
  }),
});

export const { useGetActiveUserQuery } = userApiSlice;
