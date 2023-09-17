const { createSlice } = require('@reduxjs/toolkit');
const { getParkingInfo } = require('../actions/parkingAction');

const compareErrorStatus = (status) => {
  if (status === 404) {
    return false;
  }
  return true;
};

const initialState = {
  parkingInfo: '',
  isParkingInfoLoading: true,
  parkingInfoStatus: true,
};

const parkingInfoSlice = createSlice({
  name: 'parkingInfoSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getParkingInfo.pending, (state, action) => {
      state.isParkingInfoLoading = true;
    });
    builder.addCase(getParkingInfo.fulfilled, (state, action) => {
      state.isParkingInfoLoading = false;
      state.parkingInfo = action.payload.park;
      state.parkingInfoStatus = compareErrorStatus(action.payload.status);
    });
    builder.addCase(getParkingInfo.rejected, (state, action) => {
      state.isParkingInfoLoading = false;
    });
  },
});

export default parkingInfoSlice.reducer;
