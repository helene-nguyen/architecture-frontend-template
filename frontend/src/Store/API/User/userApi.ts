import { apiSlice } from '..';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    //& QUERIES
    getCurrentUser: build.query({
      query: (userId) => {
        console.log("USER ID", userId);
        
        return {
          url: `/users/${userId}`,
          // Backend API always returns a 200,
          // but sets an `isError` property when there is an error.
          // By default, fetchBaseQuery will reject any Response that does not have a status code of 2xx and set it to error
          validateStatus: (response, result) => response.status === 200 && !result.isError,
          // users endpoint is really fast because it's always cached
          // configure if its over > 1000ms, something is wrong and we should abort the request
          timeout: 1000,
        };
      },
      providesTags: ['USER'],
    }),

    //& MUTATIONS
    
  }),
});

// Hooks automatically generated based on the name of the endpoint
// useQuery is the primary Hook => automatically fetches data from an endpoint

export const { useLazyGetCurrentUserQuery } = userApiSlice;
export default userApiSlice.reducer;
