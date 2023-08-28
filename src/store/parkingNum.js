const { createSlice } = require('@reduxjs/toolkit');
const {  getParkingNum } = require('../actions/parkingAction');

const initialState = {
  parkingNum: '',
  isParkingNumLoading: true,
};

const parkingNumSlice = createSlice({
  name: 'parkingNumSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getParkingNum.pending]: (state) => {
      state.isParkingNumLoading = true;
    },
    [getParkingNum.fulfilled]: (state, payload) => {
      state.isParkingNumLoading = false;
      state.parkingNum = payload;
    },
    [getParkingNum.rejected]: (state) => {
      state.isParkingNumLoading = false;
    },
  },
});

export default parkingNumSlice.reducer
