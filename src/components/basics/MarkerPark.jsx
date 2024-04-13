import { Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import parking from '../../assets/images/auto32.png';
import noParking from '../../assets/images/noPark32.png';
import googlePng from '../../assets/images/google-maps.png';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const MarkerPark = (...props) => {
  const { lat, lng, park, onClick } = props[0];
  const [isavailablecar, setIsAvailablecar] = useState(true);
  // };

  useEffect(() => {
    function isAvailablecarNum() {
      if (park.availablecar <= 0) {
        setIsAvailablecar(false);
        return;
      }
      setIsAvailablecar(true);
    }
    isAvailablecarNum();
  }, [park]);
  const ParkIcon = new icon({
    iconUrl: parking,
    iconSize: [32, 32],
  });
  const noParkIcon = new icon({
    iconUrl: noParking,
    iconSize: [32, 32],
  });

  return (
    <>
      <Marker
        key={park.id}
        id={park.id}
        position={[lat, lng]}
        icon={isavailablecar ? ParkIcon : noParkIcon}
      >
        <Popup autoPan={false}>
          <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={50}
            className="mySwiper"
          >
            <SwiperSlide>
              停車場名稱：{park.name}
              <br />
              剩餘停車位：
              {park.availablecar}
              <br />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(park.name);
                }}
                className="google-map-btn"
              >
                <img
                  src={googlePng}
                  className="google-map-picture"
                  alt="google-map"
                />
                <span className="google-map-text">前往 {park.name}</span>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              價格資訊：
              <br />
              {park.payex}
            </SwiperSlide>
            <SwiperSlide>
              服務時間：{park.serviceTime}
              <br />
              電話：{park.tel}
            </SwiperSlide>
          </Swiper>
        </Popup>
      </Marker>
    </>
  );
};

export default MarkerPark;
