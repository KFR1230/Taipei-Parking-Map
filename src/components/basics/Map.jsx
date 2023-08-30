import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useDispatch, useSelector } from 'react-redux';
import { getParkingInfo, getParkingNum } from '../../actions/parkingAction';
import twd97_to_latlng from '../../helper/covert';
import { currentParkingActions } from '../../store/currentParkingInfo';
import MarkerPark from './MarkerPark';

const Map = () => {
  const dispatch = useDispatch();
  //取得initial state
  const { parkingInfo, isParkingInfoLoading } = useSelector(
    (state) => state.parkingInfo
  );
  const { parkingNum, isParkingNumLoading } = useSelector(
    (state) => state.parkingNum
  );
  const { currentPark } = useSelector((state) => state.currentParking);
  
  // *** 放置地圖
  let center = [25.03566, 121.520146]; // 中心點座標

  const handlerClickLink = (name) => {
    console.log(name)
    window.open(`https://www.google.com/maps/dir/${center}/${name}`, '_blank');
  };

  useEffect(() => {
    dispatch(getParkingInfo());
    dispatch(getParkingNum());
  }, []);

  useEffect(() => {
    if (!(parkingInfo && parkingNum)) {
      return;
    }
    
    dispatch(
      currentParkingActions.mergeParkInfo([
        parkingInfo?.payload?.park,
        parkingNum?.payload?.park,
      ])
    );
  }, [parkingInfo, parkingNum]);

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
