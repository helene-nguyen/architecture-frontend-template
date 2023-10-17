//~ Import modules
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../../Types/GlobalTypes/Store';

const baseUrl = import.meta.env.VITE_APP_API_URL;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
    timeout: 10000,
    // If you want to send back the cookies
    // credentials: 'include',
    // Allows you to inject headers on every request

    // Automatically include authorization headers for your API requests
    prepareHeaders: (headers: Headers, { getState }) => {
      // We want to send the access token on every request
      const token = (getState() as RootState).auth.accessToken;
      // If we have a token set in state, let's assume that we should be passing it - also check authorization headers uppercase or lowercase
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['USER'],
  // Let's empty to inject endpoints => code splitting
  endpoints: () => ({}),
});

// Export apiSlice Reducer to add it for combining reducers for the application
export default apiSlice.reducer;
