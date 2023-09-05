import './scss/main.scss';
import 'leaflet/dist/leaflet.css';
import MapPage from './components/pages/MapPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/main" element={<MapPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
