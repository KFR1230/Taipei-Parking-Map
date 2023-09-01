import twd97_to_latlng from './covert';
import L from 'leaflet';

class QuickSearchData {
  constructor(id, area, name, lat, lng, availablecar, distance) {
    this.id = id;
    this.area = area;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.availablecar = availablecar;
    this.distance = distance;
  }
}

function centerDis({ currentPark, centerPosition }) {
  const nearlyPark = currentPark.map((park) => {
    const { lat, lng } = twd97_to_latlng(park.tw97x, park.tw97y);
    let latlngFrom = L.latLng(...centerPosition);
    let latlngTo = L.latLng(lat, lng);
    let distance = latlngFrom.distanceTo(latlngTo);
    const { id, area, name, availablecar } = park;
    return new QuickSearchData(
      id,
      area,
      name,
      lat,
      lng,
      availablecar,
      distance
    );
  });
  return nearlyPark;
}

export default centerDis;
//這個函示負責處理，停車場與中心點之間的距離，並建構出個新的資料，給予快懶最近的停車場，每一次拖曳結束便會傳中心點經緯度，與合併的資料每一筆進行比較，並以class建構出，名稱、id、經緯度、剩餘位置。

//之後再透過演算法函示，排序剛剛建立好的資料

//在快懶表單中可以展開，看到目前最近的停車場資訊

//用reducer儲存
