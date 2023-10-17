//~ Import modules
import apiReducer from '../API';
import authReducer from './Features/Authentication';
import authApiReducer from '../API/User/authentication';
import userApiReducer from '../API/User/userApi';

const reducers = {
  api: apiReducer,
  auth: authReducer,
  authApi: authApiReducer,
  userApi: userApiReducer,
  // theme: themeReducer,
};

//export all combined reducers to use in the store
export default reducers;
