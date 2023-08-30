import { icon } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useDispatch, useSelector } from 'react-redux';
import { getParkingInfo, getParkingNum } from '../../actions/parkingAction';
import twd97_to_latlng from '../../helper/covert';
import getCurrentPosition from '../../helper/location';
import { currentParkingActions } from '../../store/currentParkingInfo';
import MarkerPark from './MarkerPark';
import currentLocation from '../../assets/images/map32.png';

const Map = () => {
  //試著使用createAsyncThunk來取得定位值，但出現了「A non-serializable value was detected in an action, in the path: `payload`.」Redux要求state都是可序列化的（可轉成JSON的），不可使用非序列化當作值，因此更改成使用useState儲存
  const [center] = useState([25.03566, 121.520146]); // 中心點座標
  const [latitude, setLatitude] = useState(center[0]);
  const [longitude, setLongitude] = useState(center[1]);
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  //取得initial state
  const { parkingInfo, isParkingInfoLoading } = useSelector(
    (state) => state.parkingInfo
  );
  const { parkingNum, isParkingNumLoading } = useSelector(
    (state) => state.parkingNum
  );
  const { currentPark } = useSelector((state) => state.currentParking);
  const dispatch = useDispatch();
  // *** 放置地圖

  //前往指定位置
  //中心外圍有哪些

  const handlerClickLink = (name) => {
    console.log(name);
    window.open(`https://www.google.com/maps/dir/${center}/${name}`, '_blank');
  };

  const markerIcon = new icon({
    iconUrl: currentLocation,
    iconSize: [32, 32],
  });

  const handleClickTarget = () => {
    setIsLocationLoading(true);
    getCurrentPosition()
      .then((res) => {
        setLatitude(res.coords.latitude);
        setLongitude(res.coords.longitude);
        setIsLocationLoading(false);
      }) //resolve
      .catch((error) => {
        console.log(error);
        setIsLocationLoading(false);
      }); //reject
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
              return (
                <MarkerPark
                  key={park.id}
                  lat={lat}
                  lng={lng}
                  park={park}
                  onClick={handlerClickLink}
                />
              );
            })}
        </MarkerClusterGroup>
        {!isLocationLoading && (
          <Marker position={[latitude,longitude]} icon={markerIcon} />
        )}
      </MapContainer>
      <button
        className="location-btn"
        disabled={isLocationLoading ? true : false}
        onClick={handleClickTarget}
      />
    </div>
  );
};

export default Map;
