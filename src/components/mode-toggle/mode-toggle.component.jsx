import Icon from "../../utils/icons";

const ModeToggle = ({ lightClick, darkClick }) => {
  return (
    <div className="modeToggle-wrapper">
      <div className="modeToggle-body">
        <div className="mode-button left-button" onClick={lightClick}>
          {Icon("lightMode")}
        </div>
        <div className="mode-button right-button" onClick={darkClick}>
          {Icon("darkMode")}
        </div>
      </div>
    </div>
  );
};

export default ModeToggle;
