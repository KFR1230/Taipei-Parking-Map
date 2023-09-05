import logo from '../../assets/images/spaces128.png';
import cover from '../../assets/images/cover1024.png';
import car from '../../assets/images/car128.png';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigation = useNavigate()
  const handlerClickImage = ()=>{
    navigation('/main')
  }

  return (
    <>
      <div className="main-container container">
        <div className="main-wrapper">
          <img src={cover} alt="main-banner" className="main-banner" />
          <section className="main-left-side">
            <div className="introduce-image" />
            <img src={car} alt="introduce" className="car-image" onClick={handlerClickImage}/>
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
