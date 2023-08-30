import { configureStore } from '@reduxjs/toolkit';
import parkingInfoReducer from './parkingInfo';
import parkingNumReducer from './parkingNum';
import currentParkingReducer from './currentParkingInfo';

const store = configureStore({
  reducer: {
    parkingInfo: parkingInfoReducer,
    parkingNum: parkingNumReducer,
    currentParking: currentParkingReducer,
  },
});

export default store;
