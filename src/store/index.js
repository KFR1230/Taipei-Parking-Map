import { configureStore } from '@reduxjs/toolkit';
import parkingInfoReducer from './parkingInfo';
import parkingNumReducer from './parkingNum';
import currentParkingReducer from './currentParkingInfo';
import crossPositionReducer from './crossPosition'
import dataThemeReducer from './dataTheme'
import noticeModalReducer from './noticeModal';
const store = configureStore({
  reducer: {
    parkingInfo: parkingInfoReducer,
    parkingNum: parkingNumReducer,
    currentParking: currentParkingReducer,
    crossPosition: crossPositionReducer,
    dataTheme: dataThemeReducer,
    noticeModal: noticeModalReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

export default store;
