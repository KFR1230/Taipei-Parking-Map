import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeMode: false,
};

const dataThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    setNightMode(state) {
      state.themeMode = true;
    },
    setLightMode(state) {
      state.themeMode = false;
    },
  },
});

export const dataThemeActions = dataThemeSlice.actions;
export default dataThemeSlice.reducer;
