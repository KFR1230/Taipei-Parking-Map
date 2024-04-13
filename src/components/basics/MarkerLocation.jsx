import { icon } from 'leaflet';
import { useCallback, useEffect } from 'react';
import { Circle, Marker, useMap } from 'react-leaflet';
import currentLocation from '../../assets/images/map32.png';

const MarkerLocation = ({ latitude, longitude }) => {
  const map = useMap();
  const moveToPosition = useCallback((latitude, longitude) => {
    map.setView([latitude, longitude], 16);
    // eslint-disable-next-line
  }, []); //當渲染時，便會重新宣告函示，裏面所使用的值會是舊的值，使用useEffect並使用參數的方式帶入函示
  useEffect(() => {
    moveToPosition(latitude, longitude);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  const markerIcon = new icon({
    iconUrl: currentLocation,
    iconSize: [32, 32],
  });
  return (
    <>
      <Marker position={[latitude, longitude]} icon={markerIcon}>
        <Circle center={[latitude, longitude]} radius={200} />
      </Marker>
    </>
  );
};

export default MarkerLocation;
