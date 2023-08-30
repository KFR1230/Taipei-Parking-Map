import { createSlice } from '@reduxjs/toolkit';
import mergeParking from '../helper/mergeParking';


const initialState = {
  currentPark: [],
};

const currentParkingSlice = createSlice({
  name: 'currentParkingSlice',
  initialState,
  reducers: {
    mergeParkInfo(state, action) {
     state.currentPark = mergeParking(action.payload[1], action.payload[0]); 
    },
  },
});

//記得要把reducer放到store裡，才能執行action

export const currentParkingActions = currentParkingSlice.actions
export default currentParkingSlice.reducer;
