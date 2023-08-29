import { icon } from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getParkingInfo, getParkingNum } from '../../actions/parkingAction';
import parking from '../../assets/images/auto32.png';
import twd97_to_latlng from '../../helper/covert';

const Map = () => {
  const dispatch = useDispatch();
  //取得initail state
  const { parkingInfo, isParkingInfoLoading } = useSelector(
    (state) => state.parkingInfo
  );
  const { parkingNum, isParkingNumLoading } = useSelector(
    (state) => state.parkingNum
  );
  const [currentPark, setCurrentPark] = useState(null); //會選擇使用useState方式儲存，原因是這個值是特殊，會有隨著api曲出來的值產生變化
  // *** 放置地圖
  let center = [25.03566, 121.520146]; // 中心點座標
  const markerIcon = new icon({
    iconUrl: parking,
    iconSize: [32, 32],
  });

  const parkingMerge = (info, num) => {
    const currentParking = num.reduce((result, current) => {
      const parkInfo = info.find((p) => p.id === current.id); //若沒有找到目標，find會回傳undefined
      if (parkInfo) {
        result.push({ ...parkInfo, ...current });
      }
      return result;
    }, []); //以array為預設型態
    return currentParking;
  }; //該函示用來合併兩個資料

  useEffect(() => {
    dispatch(getParkingInfo());
    dispatch(getParkingNum());
  }, []);

  useEffect(() => {
    if (isParkingInfoLoading || isParkingNumLoading) {
      return;
    }
    setCurrentPark(
      parkingMerge(parkingInfo.payload.park, parkingNum.payload.park)
    );
  }, [isParkingInfoLoading, isParkingNumLoading]);

  return (
    <>
      <MapContainer center={center} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MarkerClusterGroup>
          {currentPark &&
            currentPark.map((park) => {
              const { lat, lng } = twd97_to_latlng(park.tw97x, park.tw97y); //twd97轉換WGS84
              return (
                <Marker key={park.id} position={[lat, lng]} icon={markerIcon}>
                  <Popup>
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
              );
            })}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Map;
