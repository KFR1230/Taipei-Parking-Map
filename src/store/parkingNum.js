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
  extraReducers: (builder)=>{
    builder.addCase(getParkingNum.pending, (state,action) => {
      state.isParkingNumLoading = true;
    })
    builder.addCase(getParkingNum.fulfilled, (state,action) => {
      state.isParkingNumLoading = false;
      state.parkingNum = action.payload;
    })
    builder.addCase(getParkingNum.rejected, (state,action) => {
      state.isParkingNumLoading = false;
    })
  },
});

export default parkingNumSlice.reducer
