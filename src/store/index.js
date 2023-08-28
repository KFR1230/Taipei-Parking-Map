import { configureStore } from '@reduxjs/toolkit';
import parkingInfoReducer from './parkingInfo';
import parkingNumReducer from './parkingNum';

const store = configureStore({
  reducer: {
    parkingInfo: parkingInfoReducer,
    parkingNum: parkingNumReducer,
  },
});

export default store;
