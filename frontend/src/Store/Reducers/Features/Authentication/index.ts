//~ Import modules
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  connected: false,
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
      state.connected = true;
    },
    // We want it back to null when log out
    logOut: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.connected = false;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
