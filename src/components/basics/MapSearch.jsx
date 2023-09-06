import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import location from '../../assets/images/location32.png';
import L from 'leaflet';
const MapSearch = () => {
  const icon = new L.Icon({
    iconUrl: location,
    iconSize: [32, 32],
  });
  const map = useMap();
  

  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider({
      params: {
        'accept-language': 'zh',
        countrycodes: 'tw',
      },
    }),
    style: 'button',
    position: 'topright',
    showMarker: true,
    maxMarkers: 1,
    zoom: 10,
    showPopup: false,
    animateZoom: true,
    searchLabel: '請輸入地址',
    notFoundMessage: '找不到結果',
    autoComplete: true,
    autoCompleteDelay: 200,
    marker: {
      // optional: L.Marker    - default L.Icon.Default
      icon,
      draggable: false,
    },
  });
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);
};

export default MapSearch;
