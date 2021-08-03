import Icon from "../../utils/icons";

const IconButton = ({ type }) => {
  return (
    <div className="iconButton-wrapper">
      <div className="iconButton-body">{Icon(type)}</div>
    </div>
  );
};

export default IconButton;
