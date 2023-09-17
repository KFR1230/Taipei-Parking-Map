const { createSlice } = require('@reduxjs/toolkit');
const { getParkingNum } = require('../actions/parkingAction');

const compareErrorStatus = (status) => {
  if (status === 404) {
    return false;
  }
  return true;
};

const initialState = {
  parkingNum: '',
  isParkingNumLoading: true,
  parkingNumStatus: true,
};

const parkingNumSlice = createSlice({
  name: 'parkingNumSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getParkingNum.pending, (state, action) => {
      state.isParkingNumLoading = true;
    });
    builder.addCase(getParkingNum.fulfilled, (state, action) => {
      state.isParkingNumLoading = false;
      state.parkingNum = action.payload.park;
      state.parkingNumStatus = compareErrorStatus(action.payload.status);
    });
    builder.addCase(getParkingNum.rejected, (state, action) => {
      state.isParkingNumLoading = false;
    });
  },
});

export default parkingNumSlice.reducer;
