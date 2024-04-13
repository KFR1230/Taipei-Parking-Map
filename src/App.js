import './scss/main.scss';
import 'leaflet/dist/leaflet.css';
import MapPage from './components/pages/MapPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import DescriptionPage from './components/pages/DescriptionPage';
function App() {
  // const basename = process.env.PUBLIC_URL;
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/description" element={<DescriptionPage />}></Route>
        <Route path="/main" element={<MapPage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
