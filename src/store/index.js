import { configureStore } from '@reduxjs/toolkit';
import parkingInfoReducer from './parkingInfo';
import parkingNumReducer from './parkingNum';
import currentParkingReducer from './currentParkingInfo';
import crossPositionReducer from './crossPosition'
import dataThemeReducer from './dataTheme'
const store = configureStore({
  reducer: {
    parkingInfo: parkingInfoReducer,
    parkingNum: parkingNumReducer,
    currentParking: currentParkingReducer,
    crossPosition: crossPositionReducer,
    dataTheme: dataThemeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
