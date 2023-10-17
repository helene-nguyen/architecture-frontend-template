//~ Import modules
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQueryWithReAuth';

const baseAuthApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export const authApiSlice = baseAuthApiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   try {
      //     await queryFulfilled;
      //     await dispatch();
      //   } catch (error) {}
      // },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
export default authApiSlice.reducer;
