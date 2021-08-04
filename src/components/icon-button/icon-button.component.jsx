import Icon from "../../utils/icons";

const IconButton = ({ type, isOperation }) => {
  return (
    <div className="iconButton-wrapper">
      <div className={`iconButton-body ${(isOperation)? "is-operation": ""}`}>{Icon(type)}</div>
    </div>
  );
};

export default IconButton;
