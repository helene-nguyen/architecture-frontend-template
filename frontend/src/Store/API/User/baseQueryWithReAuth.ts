//~ Import modules
import { Mutex } from 'async-mutex';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//~ Import actions
import { setCredentials, logOut } from '../../Reducers/Features/Authentication';
import { RootState } from '../../../Types/GlobalTypes/Store';

//~ Variables
const baseUrl = import.meta.env.VITE_APP_API_URL;
const baseQuery = fetchBaseQuery({ baseUrl });

//* Create a new mutex to prevent multiple calls to '/refreshToken' when multiple calls fail with Unauthorized errors
const mutex = new Mutex();

//* Automatic re-authorization by extending fetchBaseQuery
export const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  // Wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);
  

  // We want to send refresh token to get new access token
  if (result?.error?.status === 400 || 403) {
    //* checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        //* Get refresh token from the store
        const refreshToken = (api.getState() as RootState).auth.refreshToken;
        
        const refreshResult = await baseQuery(
          {
            url: '/refreshToken',
            method: 'POST',
            headers: { Authorization: `Bearer ${refreshToken}`, 'Content-Type': 'application/json' },
          },
          api,
          extraOptions
        );

        if (refreshResult?.data) {
          const user = (api.getState() as RootState).auth.user;

          // Store the new token with setCredentials
          api.dispatch(setCredentials({ ...refreshResult.data, user }));

          // Retry the original query with access token
          result = await baseQuery(args, api, extraOptions);
          // Reuse the logOut from the reducer
        } else api.dispatch(logOut());
      } finally {
        // Release must be called once the mutex should be released again.
        release();
      }
    } else {
      // Wait until the mutex is available without locking it
      await mutex.waitForUnlock();

      result = await baseQuery(args, api, extraOptions);
    }
  }
  // Set credentials into the store
  api.dispatch(setCredentials(result.data));
  return result;
};
