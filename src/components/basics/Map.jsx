import { icon } from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useDispatch, useSelector } from 'react-redux';
import { getParkingInfo, getParkingNum } from '../../actions/parkingAction';
import parking from '../../assets/images/auto32.png';
import twd97_to_latlng from '../../helper/covert';

const Map = () => {
  const dispatch = useDispatch();
  //取得initail state
  const { parkingInfo, isParkingInfoLoading } = useSelector(
    (state) => state.parkingInfo
  );
  const { parkingNum, isParkingNumLoading } = useSelector(
    (state) => state.parkingNum
  );

  // *** 放置地圖
  let center = [25.03566, 121.520146]; // 中心點座標
  const markerIcon = new icon({
    iconUrl: parking,
    iconSize: [32, 32],
  }); 

  useEffect(() => {
    dispatch(getParkingInfo());
    dispatch(getParkingNum());
  }, []);

  return (
    <>
      <MapContainer center={center} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MarkerClusterGroup>
          {parkingInfo &&
            parkingInfo.payload.park.map((park) => {
              const { lat, lng } = twd97_to_latlng(park.tw97x, park.tw97y); //twd97轉換WGS84
              return (
                <Marker key={park.id} position={[lat, lng]} icon={markerIcon}>
                  <Popup>{park.name}</Popup>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Map;
