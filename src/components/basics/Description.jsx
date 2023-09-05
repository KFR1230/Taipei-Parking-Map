import light from '../../assets/images/light24.png'
import moon from '../../assets/images/moon24.png';
import refresh from '../../assets/images/refresh24.png'
import target from '../../assets/images/target25.png';
import car from '../../assets/images/auto32.png';
import noPark from '../../assets/images/noPark32.png';
import map from '../../assets/images/map32.png';
import menu from '../../assets/images/menu24.png';
import googleMap from '../../assets/images/google-maps.png';
import openDoor from '../../assets/images/open-door16.png';
import popup from '../../assets/images/popup.png';
import nearlyPark from '../../assets/images/nearlyPark.png'
const Description = () => {
  return (
    <>
      <div className="description-container container">
        <div className="description-wrapper">
          <section className="item-introduce">
            <h1 className="item-introduce-name">圖示介紹：</h1>
            <div className="item-list">
              <div className="item-icon">
                <img src={light} alt="" className="item-icon-img" />
                <img src={moon} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">切換夜覽模式</div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={menu} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">列表選單</div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={refresh} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">刷新頁面</div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={target} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">取得當前位置</div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={map} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">目前位置座標</div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={car} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">
                台北市停車區（目前有剩餘車位）
              </div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={noPark} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">
                台北市停車區（目前無剩餘車位）
              </div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={googleMap} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">移動至google maps</div>
            </div>
            <div className="item-list">
              <div className="item-icon">
                <img src={openDoor} alt="" className="item-icon-img" />
              </div>
              <div className="item-description">
                查看與地圖中心點最近的前100的停車廠
              </div>
            </div>
          </section>
          <section className="item-feature">
            <h1 className="item-feature-name">功能介紹：</h1>
            <div className="feature-list">
              <div className="feature-picture">
                <img src={popup} alt="" className="feature-img" />
              </div>
              <div className="feature-description">
                地圖頁面，點擊黃色汽車圖示會彈出關於該停車場的資訊。
              </div>
            </div>
            <div className="feature-list">
              <div className="feature-picture">
                <img src={nearlyPark} alt="" className="feature-img" />
              </div>
              <div className="feature-description">
                地圖頁面，點擊左側邊框，出現的列表是離中心紅十字最近的前100筆停車場。（手機版點擊下側邊框）
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Description;
