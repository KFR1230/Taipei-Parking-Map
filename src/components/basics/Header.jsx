import logo from '../../assets/images/parking-area.png'
const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <div className="header-wrapper">
          <nav className="nav">
            <div className="nav-title">
              <img src={logo} alt="nav-title-logo" className="nav-title-logo" />
              <span className='nav-title-text'>
                City Parking
              </span>
            </div>
            <div className="nav-menu">
              
            </div>
          </nav>
        </div>
      </div>
    </header>
  );;
};

export default Header;
