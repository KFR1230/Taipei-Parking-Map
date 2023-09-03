import { useSelector } from 'react-redux';
import ParkCard from './ParkCard';

const CollapsePark = (...props) => {
  const { nearlyPark } = useSelector((state) => state.crossPosition);
  const { latitude, longitude } = props[0];
  const first100Park = nearlyPark.slice(0, 100);
  //先取得前100筆資料，infinity scroll的使用
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
              {first100Park &&
                first100Park.map((park) => {
                  return (
                    <ParkCard
                      key={park.id}
                      park={park}
                      onClick={handlerClickLink}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapsePark;
