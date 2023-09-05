import logo from '../../assets/images/spaces128.png';
import cover from '../../assets/images/cover1024.png';
import intro from '../../assets/images/intro.png';
import introN from '../../assets/images/introN.png';
import car from '../../assets/images/car128.png';
import { useSelect } from '@mui/base';
const Home = () => {
  const { themeMode } = useSelect((state) => state.dataTheme);
  return (
    <>
      <div className="main-container">
        <div className="main-wrapper">
          <img src={cover} alt="main-banner" className="main-banner" />
          <section className="main-left-side">
            <div className="introduce-image" />
            <img src={car} alt="introduce" className="car-image" />
          </section>
          <section className="main-right-side">
            <div className="title-logo">
              <img src={logo} alt="title-logo" className="title-logo" />
            </div>
            <div className="title-name">City Parking</div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
