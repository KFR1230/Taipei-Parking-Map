const { createAsyncThunk } = require('@reduxjs/toolkit');
const {
  fetchingParkingInfo,
  fetchingParkingNum,
} = require('../api/parkingAPI');

export const getParkingInfo = createAsyncThunk(
  'parking/parkingInfo',
  async () => {
    try {
      const res = await fetchingParkingInfo();
      return res.data.data;
    } catch (error) {
      const res = error;
      return res.response;
    }
  }
);

export const getParkingNum = createAsyncThunk(
  'parking/parkingNum',
  async () => {
    try {
      const res = await fetchingParkingNum();
      return res.data.data;
    } catch (error) {
      const res = error
      return res.response
    }
  }
);
