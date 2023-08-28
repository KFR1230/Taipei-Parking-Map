const { createSlice } = require('@reduxjs/toolkit');
const { getParkingInfo } = require('../actions/parkingAction');

const initialState = {
  parkingInfo: '',
  isParkingInfoLoading: true,
};

const parkingInfoSlice = createSlice({
  name: 'parkingInfoSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getParkingInfo.pending]: (state) => {
      state.isParkingInfoLoading = true;
    },
    [getParkingInfo.fulfilled]: (state, payload) => {
      state.isParkingInfoLoading = false;
      state.parkingInfo = payload;
    },
    [getParkingInfo.rejected]: (state) => {
      state.isParkingInfoLoading = false;
    },
  },
});

export default parkingInfoSlice.reducer;
