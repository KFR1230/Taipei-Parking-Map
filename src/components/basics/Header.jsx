import { useDispatch } from 'react-redux';
import logo from '../../assets/images/parking-area.png';
import { dataThemeActions } from '../../store/dataTheme';

const Header = () => {
  const dispatch = useDispatch()
  const handlerDarkMode = (e) => {
    if (e.target.checked === true) {
      document.documentElement.setAttribute('data-theme', 'dark')
      dispatch(dataThemeActions.setNightMode())
      return
    }else{
      document.documentElement.setAttribute('data-theme', 'light');
      dispatch(dataThemeActions.setLightMode());
      return
    }
  };

  return (
    <header>
      <div className="header-container container">
        <div className="header-wrapper">
          <nav className="nav">
            <div className="nav-title">
              <img src={logo} alt="nav-title-logo" className="nav-title-logo" />
              <span className="nav-title-text">City Parking</span>
            </div>
            <div className="night-mode">
              <label
                className="sidebar__darkmode__label"
                htmlFor="dark__mode__toggle"
              ></label>
              <input
                type="checkbox"
                className="night-mode-btn"
                onChange={handlerDarkMode}
                id="dark__mode__toggle"
              />
            </div>
            <div className="nav-menu"></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
