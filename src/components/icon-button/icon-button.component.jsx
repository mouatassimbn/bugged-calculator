import Icon from "../../utils/icons";

const IconButton = ({ type, classes = "", isOperation }) => {
  return (
    <div className={`iconButton-wrapper btn ${classes}`}>
      <div className={`iconButton-body ${isOperation ? "is-operation bold" : ""}`}>
        {Icon(type)}
      </div>
    </div>
  );
};

export default IconButton;
