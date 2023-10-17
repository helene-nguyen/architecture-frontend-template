//~ Import modules
import { Middleware } from '@reduxjs/toolkit';
import { apiSlice } from '../API';
import { authApiSlice } from '../API/User/authentication';

//~ Export middlewares
const allMiddlewares: Middleware[] = [apiSlice.middleware, authApiSlice.middleware];

const getDefaultMiddleware = (getDefaultMiddleware: () => Middleware[]) =>
  getDefaultMiddleware().concat(allMiddlewares as ReturnType<typeof getDefaultMiddleware>);

export default getDefaultMiddleware;
