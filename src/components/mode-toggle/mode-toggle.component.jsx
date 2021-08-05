import Icon from "../../utils/icons";

const ModeToggle = ({ active, lightClick, darkClick }) => {
  return (
    <div className="modeToggle-wrapper">
      <div className="modeToggle-body">
        <div
          className={`mode-button left-button ${
            active === "light" ? "selected" : ""
          }`}
          onClick={lightClick}
        >
          {Icon("lightMode")}
        </div>
        <div
          className={`mode-button right-button ${
            active === "dark" ? "selected" : ""
          }`}
          onClick={darkClick}
        >
          {Icon("darkMode")}
        </div>
      </div>
    </div>
  );
};

export default ModeToggle;
