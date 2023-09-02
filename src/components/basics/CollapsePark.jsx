import { useSelector } from 'react-redux';
import ParkCard from './ParkCard';

const CollapsePark = (...props) => {
  const { nearlyPark } = useSelector((state) => state.crossPosition);
  const { latitude, longitude } = props[0];
  
   const handlerClickLink = (name) => {
     window.open(
       `https://www.google.com/maps/dir/${latitude},${longitude}/${name}`,
       '_blank'
     );
   };
  return (
    <>
      <div className="collapse-container">
        <div className="collapse-wrapper">
          <div className="collapse-checkbox">
            <input
              type="checkbox"
              className="checkbox"
              id="collapse-checkbox"
            />
          </div>
          <div className="collapse-nearlyPark">
            <div className="nearlyPark-list">
              {nearlyPark &&
                nearlyPark.map((park) => {
                  return <ParkCard key={park.id} park={park} onClick={handlerClickLink}/>;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapsePark;
