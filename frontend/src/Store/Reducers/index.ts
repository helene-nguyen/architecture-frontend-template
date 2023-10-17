//~ Import modules
import themeReducer from './Theme';
import apiReducer from '../API';
import authReducer from './Features/Authentication';
import authApiReducer from '../API/User/authentication';
import userApiReducer from '../API/User/userApi';

const reducers = {
  api: apiReducer,
  auth: authReducer,
  authApi: authApiReducer,
  userApi: userApiReducer,
  theme: themeReducer,
};

// Export all combined reducers to use in the store
export default reducers;
