import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMap, useMapEvents } from 'react-leaflet';
import { crossPositionActions } from '../../store/crossPosition';

const CenterCheck = ({ latitude, longitude }) => {
  const map = useMap();
  const { currentPark } = useSelector((state) => state.currentParking);
  const [centerPosition, setCenterPosition] = useState([latitude, longitude]);
  const dispatch = useDispatch();
  //透過拖曳取得中心位置
  const getCenterPosition = () => {
    const dragendPosition = map.getCenter();
    setCenterPosition([dragendPosition.lat, dragendPosition.lng]);
  };
  useMapEvents({
    dragend: getCenterPosition,
  });
  useEffect(() => {
    dispatch(crossPositionActions.setNearlyParkLoading());
    dispatch(
      crossPositionActions.setNearlyPark({ currentPark, centerPosition })
    );
    dispatch(crossPositionActions.setNearlyParkLoaded());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerPosition, currentPark, latitude, longitude]);

  return <></>;
};

export default CenterCheck;
