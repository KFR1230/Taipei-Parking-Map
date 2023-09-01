import { createSlice } from '@reduxjs/toolkit';
import centerDis from '../helper/centerDis';
import sort from '../helper/SelectionSort';

const initialState = {
  nearlyPark: [],
  isNearlyParkLoading: false
};

const crossPositionSlice = createSlice({
  name: 'crossPosition',
  initialState,
  reducers: {
    setNearlyPark: (state, action) => {
      state.nearlyPark = sort(centerDis(action.payload));
    },
    setNearlyParkLoading: (state)=>{
      state.isNearlyParkLoading = true
    },
    setNearlyParkLoaded: (state)=>{
      state.isNearlyParkLoading =false
    }
  },
});
export const crossPositionActions = crossPositionSlice.actions;
export default crossPositionSlice.reducer;
