import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/spaces64.png';
import { dataThemeActions } from '../../store/dataTheme';
import NightModeBtn from './NightModeBtn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const handlerDarkMode = (e) => {
    if (e.target.checked === true) {
      document.documentElement.setAttribute('data-theme', 'dark');
      dispatch(dataThemeActions.setNightMode());
      return;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      dispatch(dataThemeActions.setLightMode());
      return;
    }
  };
  const handlerMenuMode = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlerClickLogo = () => {
    navigation('/')
  };

  return (
    <header>
      <div className="header-container container">
        <div className="header-wrapper">
          <nav className="nav-container">
            <section className="nav-title">
              <img
                src={logo}
                alt="nav-title-logo"
                className="nav-title-logo"
                onClick={handlerClickLogo}
              />
              <span className="nav-title-text">City Parking</span>
            </section>
            <section className="nav-info">
              <NightModeBtn onChange={handlerDarkMode} />
              <button
                className={`nav-menu-btn ${clsx('', { active: isMenuOpen })}`}
                onClick={handlerMenuMode}
              />
              <div className={`nav-menu ${clsx('', { active: isMenuOpen })}`}>
                <div className="nav-menu-list">
                  <Link to="/" className="nav-menu-item">
                    首頁
                  </Link>
                  <Link to="/main" className="nav-menu-item">
                    地圖
                  </Link>
                  <Link to="/description" className="nav-menu-item">
                    使用說明
                  </Link>
                </div>
              </div>
            </section>
          </nav>
          {isMenuOpen && (
            <div className="nav-menu--list-extend" onClick={handlerMenuMode} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
