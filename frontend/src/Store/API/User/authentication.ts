//~ Import modules
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQueryWithReAuth';
import { setCredentials, logOut } from '../../Reducers/Features/Authentication';

const baseAuthApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export const authApiSlice = baseAuthApiSlice.injectEndpoints({
  endpoints: (build) => ({
    //& Mutations
    login: build.mutation({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          localStorage.setItem('access_token', data.tokens['accessToken']);
          localStorage.setItem('refresh_token', data.tokens['refreshToken']);
          dispatch(setCredentials(data));
        } catch (error) {}
      },
    }),

    registerUser: build.mutation({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
    }),

    logOutUser: build.mutation({
      query: () => ({
        url: '/signout',
      }),
      onQueryStarted: async (_, { dispatch }) => {
        try {
          localStorage.clear();
          dispatch(logOut());
        } catch (error) {}
      },
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
export default authApiSlice.reducer;
