const NightModeBtn = ({onChange}) => {
  return (
    <div className="night-mode">
      <label
        className="sidebar__darkmode__label"
        htmlFor="dark__mode__toggle"
      ></label>
      <input
        type="checkbox"
        className="night-mode-btn"
        onChange={(e) => onChange(e)}
        id="dark__mode__toggle"
      />
    </div>
  );
};
export default NightModeBtn;
