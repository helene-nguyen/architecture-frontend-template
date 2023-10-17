//~ Import modules
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/Types/GlobalTypes/Store';

//~ Initial state
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  status: 'disconnected'
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //~ Methods
    setCredentials: (state, action) => {
      const { tokens, ...user } = action.payload;

      state.user = user;
      state.accessToken = tokens.accessToken;
      state.refreshToken = tokens.refreshToken;
      state.status = 'connected';
    },
    // We want it back to null when log out
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
