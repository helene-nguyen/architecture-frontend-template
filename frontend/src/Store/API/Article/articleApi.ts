import { apiSlice } from '..';

export const articleApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    //& QUERIES
    getOneArticle: build.query({
      query: (articleId) => {
        console.log("USER ID", articleId);
        
        return {
          url: `/articles/${articleId}`,
          // Backend API always returns a 200,
          // but sets an `isError` property when there is an error.
          // By default, fetchBaseQuery will reject any Response that does not have a status code of 2xx and set it to error
          validateStatus: (response, result) => response.status === 200 && !result.isError,
          // users endpoint is really fast because it's always cached
          // configure if its over > 1000ms, something is wrong and we should abort the request
          timeout: 1000,
        };
      },
      providesTags: ['ARTICLE'],
    }),
    getAllArticles: build.query({
      query: (articleId) => {
        console.log("USER ID", articleId);
        
        return {
          url: `/articles/${articleId}`,
          // Backend API always returns a 200,
          // but sets an `isError` property when there is an error.
          // By default, fetchBaseQuery will reject any Response that does not have a status code of 2xx and set it to error
          validateStatus: (response, result) => response.status === 200 && !result.isError,
          // users endpoint is really fast because it's always cached
          // configure if its over > 1000ms, something is wrong and we should abort the request
          timeout: 1000,
        };
      },
      providesTags: ['ARTICLE'],
    }),
    
    //& MUTATIONS
    changeArticles: build.mutation({
      query: (articleId) => {
        // console.log("USER ID", articleId);
        
        return {
          url: `/articles/${articleId}`,
          // Backend API always returns a 200,
          // but sets an `isError` property when there is an error.
          // By default, fetchBaseQuery will reject any Response that does not have a status code of 2xx and set it to error
          validateStatus: (response, result) => response.status === 200 && !result.isError,
          // users endpoint is really fast because it's always cached
          // configure if its over > 1000ms, something is wrong and we should abort the request
          timeout: 1000,
        };
      },
      invalidatesTags: ['ARTICLE'],
    }),
    
  }),
});

// Hooks automatically generated based on the name of the endpoint
// useQuery is the primary Hook => automatically fetches data from an endpoint

export const { useLazyGetOneArticleQuery } = articleApiSlice;
export default articleApiSlice.reducer;
