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
  return JSON.parse(JSON.stringify(nearlyPark));
}

export default centerDis;
