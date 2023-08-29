import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useDispatch, useSelector } from 'react-redux';
import { getParkingInfo, getParkingNum } from '../../actions/parkingAction';
import twd97_to_latlng from '../../helper/covert';
import MarkerPark from './MarkerPark';

const Map = () => {
  const dispatch = useDispatch();
  //取得initail state
  const { parkingInfo, isParkingInfoLoading } = useSelector(
    (state) => state.parkingInfo
  );
  const { parkingNum, isParkingNumLoading } = useSelector(
    (state) => state.parkingNum
  );
  const [currentPark, setCurrentPark] = useState(null); //會選擇使用useState方式儲存，原因是這個值是特殊，會有隨著api曲出來的值產生變化
  // *** 放置地圖
  let center = [25.03566, 121.520146]; // 中心點座標

  //google map 透過點擊按鈕觸發eventhandler
  const parkingMerge = (info, num) => {
    const currentParking = num.reduce((result, current) => {
      const parkInfo = info.find((p) => p.id === current.id); //若沒有找到目標，find會回傳undefined
      if (parkInfo) {
        result.push({ ...parkInfo, ...current });
      }
      return result;
    }, []); //以array為預設型態
    return currentParking;
  }; //該函示用來合併兩個資料

  const handlerClickLink = (name) => {
    console.log(name)
    window.open(`https://www.google.com/maps/dir/${center}/${name}`, '_blank');
  };

  useEffect(() => {
    dispatch(getParkingInfo());
    dispatch(getParkingNum());
  }, []);

  useEffect(() => {
    if (isParkingInfoLoading || isParkingNumLoading) {
      return;
    }
    setCurrentPark(
      parkingMerge(parkingInfo.payload.park, parkingNum.payload.park)
    );
  }, [isParkingInfoLoading, isParkingNumLoading]);

  return (
    <div className="map-container container">
      <MapContainer center={center} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MarkerClusterGroup>
          {currentPark &&
            currentPark.map((park) => {
              const { lat, lng } = twd97_to_latlng(park.tw97x, park.tw97y); //twd97轉換WGS84
              return <MarkerPark 
              key={park.id}
              lat={lat} 
              lng={lng} 
              park={park}
              onClick={handlerClickLink}
              />;
            })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
