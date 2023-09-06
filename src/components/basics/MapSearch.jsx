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
    showPopup: true,
    autoClose: false,
    retainZoomLevel: false,
    animateZoom: true,
    keepResult: false,
    searchLabel: 'Enter Address',
    marker: {
      // optional: L.Marker    - default L.Icon.Default
      icon ,
      draggable: false,
    },
  });
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);
};

export default MapSearch;
