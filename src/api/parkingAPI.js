import axios from 'axios';

const parkingInfoAsync =
  'https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_alldesc.json';
const parkingNumAsync =
  'https://tcgbusfs.blob.core.windows.net/blobtcmsv/TCMSV_allavailable.json';

export const fetchingParkingInfo = () => {
  return axios.get(parkingInfoAsync)
};
export const fetchingParkingNum = () => {
  return axios.get(parkingNumAsync);
};

//axios在createAsyncThunk使用非同步的方式取得資料