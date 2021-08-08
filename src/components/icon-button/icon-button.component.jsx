import Icon from "../../utils/icons";

const IconButton = ({ type, classes = "", isOperation, clickHandler }) => {
  return (
    <div
      className={`iconButton-wrapper btn ${classes}`}
      onClick={() => clickHandler(type)}
    >
      <div
        className={`iconButton-body ${isOperation ? "is-operation bold" : ""}`}
      >
        {Icon(type)}
      </div>
    </div>
  );
};

export default IconButton;
