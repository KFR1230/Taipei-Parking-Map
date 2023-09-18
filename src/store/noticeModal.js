import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const noticeModalSlice = createSlice({
  name: 'noticeModal',
  initialState,
  reducers: {
    setOpenState: (state) => {
      state.isOpen = true;
    },
    setUnOpenState: (state) => {
      state.isOpen = false;
    },
  },
});
export const noticeModalActions = noticeModalSlice.actions;
export default noticeModalSlice.reducer;
