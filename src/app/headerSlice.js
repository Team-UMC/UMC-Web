import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    canScrolled: false,
  },
  reducers: {
    setScrolled: (state, action) => {
      state.canScrolled = action.payload;
    },
  },
});

export const { setScrolled } = headerSlice.actions;

export const selectCanScrolled = (state) => state.header.canScrolled;

export default headerSlice.reducer;