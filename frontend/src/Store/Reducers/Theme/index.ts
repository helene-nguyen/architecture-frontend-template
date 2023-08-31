//~ Import modules
import { createSlice } from '@reduxjs/toolkit';

//~ Initial state
const initialState = {
  default: 'light',
};

//~ Exports
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    //~ Methods
    toggleTheme: (state) => {
      state.default = state.default === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
