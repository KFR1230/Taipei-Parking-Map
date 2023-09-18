import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useDispatch, useSelector } from 'react-redux';
import { getParkingInfo, getParkingNum } from '../../actions/parkingAction';
import twd97_to_latlng from '../../helper/covert';
import getCurrentPosition from '../../helper/location';
import { currentParkingActions } from '../../store/currentParkingInfo';
import { noticeModalActions } from '../../store/noticeModal';
import CenterCheck from './CenterCheck';
import CollapsePark from './CollapsePark';
import MapSearch from './MapSearch';
import MarkerLocation from './MarkerLocation';
import MarkerPark from './MarkerPark';

const Map = () => {
  const [center] = useState([25.03566, 121.520146]); // 初始中心點座標
  const [latitude, setLatitude] = useState(center[0]);
  const [longitude, setLongitude] = useState(center[1]);
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  //取得initial state
  const { parkingInfo, isParkingInfoLoading, parkingInfoStatus } = useSelector(
    (state) => state.parkingInfo
  );
  const { parkingNum, isParkingNumLoading, parkingNumStatus } = useSelector(
    (state) => state.parkingNum
  );
  const { currentPark } = useSelector((state) => state.currentParking);
  const { nearlyPark } = useSelector((state) => state.crossPosition);
  const { themeMode } = useSelector((state) => state.dataTheme);
  const dispatch = useDispatch();

  const handlerClickLink = (name) => {
    window.open(
      `https://www.google.com/maps/dir/${latitude},${longitude}/${name}`,
      '_blank'
    );
  };
  const handleClickTarget = async () => {
    setIsLocationLoading(true);
    setIsMapLoading(true);
    await getCurrentPosition()
      .then((res) => {
        setLatitude(res.coords.latitude);
        setLongitude(res.coords.longitude);
      }) //resolve
      .catch((error) => {
        console.log(error);
      }); //reject
    setIsLocationLoading(false);
    setIsMapLoading(false);
  };
  const handleClickRefresh = () => {
    window.location.reload();
  };
  useEffect(() => {
    dispatch(getParkingInfo());
    dispatch(getParkingNum());
  }, [dispatch]);

  useEffect(() => {
    if (!(parkingNumStatus && parkingInfoStatus)) {
      const checkStatus = 
      setTimeout(() => {
          dispatch(noticeModalActions.setOpenState())
          setIsMapLoading(false);
        }, 3000);

      return () => {
        // 👇️ clear timeout when the component unmounts
        clearTimeout(checkStatus);
      };
    }
  }, [parkingInfoStatus, parkingNumStatus]);

  useEffect(() => {
    if (!(parkingInfo && parkingNum)) {
      return;
    }
    dispatch(currentParkingActions.mergeParkInfo([parkingInfo, parkingNum]));
    setIsMapLoading(false);
  }, [parkingInfo, parkingNum, dispatch]);
  // *** 放置地圖
  return (
    <div className="map-container container">
      <MapContainer center={center} zoom={16}>
        {themeMode && (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
        )}
        {!themeMode && (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
        )}
        <MapSearch />
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
          <MarkerLocation
            latitude={latitude}
            longitude={longitude}
            isLocationLoading={isLocationLoading}
          />
        )}
        {!isLocationLoading && (
          <CenterCheck latitude={latitude} longitude={longitude} />
        )}
        {/* 抓中心點為止 */}
      </MapContainer>
      <button
        className="refresh-btn btn"
        disabled={isLocationLoading ? true : false}
        onClick={handleClickRefresh}
      />
      <button
        className="location-btn btn"
        disabled={isLocationLoading ? true : false}
        onClick={handleClickTarget}
      />
      {nearlyPark && <CollapsePark latitude={latitude} longitude={longitude} />}
      {isMapLoading && <div className="custom-loader"></div>}
    </div>
  );
};

export default Map;
