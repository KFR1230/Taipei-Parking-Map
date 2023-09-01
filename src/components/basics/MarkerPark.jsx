import { Marker, Popup } from "react-leaflet";
import { icon } from 'leaflet';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import parking from '../../assets/images/auto32.png';
import googlePng from '../../assets/images/google-maps.png';
import 'swiper/css';
import 'swiper/css/pagination';

const MarkerPark = (...props) => {
  const {lat, lng , park , onClick} = props[0]

  const markerIcon = new icon({
    iconUrl: parking,
    iconSize: [32, 32],
  });
  return (
    <>
      <Marker key={park.id} position={[lat, lng]} icon={markerIcon}>
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
                <img src={googlePng} className="google-map-picture" alt="google-map"/>
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
