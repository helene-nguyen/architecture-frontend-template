//~ Import
import rootReducer from './Reducers';
import rootMiddleware from './Middlewares';
import { configureStore } from '@reduxjs/toolkit';

//recent way to configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
});
