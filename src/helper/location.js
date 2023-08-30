//取得目前位置
function getCurrentPosition() {
  let options = {
    enableHighAccuracy: false, //提高精準度
    timeout: 5000, //逾時計時器
    maximumAge: 0, // 設定上一次位置資訊的有效期限
  };
  //先測試地理位置定位是否存在;
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      //發出非同步的請求
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  } else {
    console.log('瀏覽器沒支援');
  }
}

export default getCurrentPosition;
