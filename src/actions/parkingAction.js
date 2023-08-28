const { createAsyncThunk } = require('@reduxjs/toolkit');
const { fetchingParkingInfo, fetchingParkingNum } = require('../api/parkingAPI');

export const getParkingInfo = createAsyncThunk('parking/parkingInfo', async () => {
  const res = await fetchingParkingInfo()
  console.log('getParkingInfo:',res.data.data);
  return res.data.data
});

export const getParkingNum = createAsyncThunk(
  'parking/parkingNum',
  async () => {
    const res = await fetchingParkingNum();
    console.log('getParkingNum:', res);
    return res.data.data;
  }
);