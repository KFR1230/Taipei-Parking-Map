import './scss/main.scss';
import 'leaflet/dist/leaflet.css';
import parking from './assets/images/auto32.png';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Map from './components/basics/Map';
function App() {
  // *** 放置地圖
  let center = [25.03566, 121.520146]; // 中心點座標
  const markerIcon = new Icon({
    iconUrl: parking,
    iconSize: [32, 32],
  });
  return (
    <>
      <Map />
    </>
  );
}

export default App;
