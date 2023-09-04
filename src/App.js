import './scss/main.scss';
import 'leaflet/dist/leaflet.css';
import MapPage from './components/pages/MapPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MapPage />}></Route>
        <Route path="*" element={<MapPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
