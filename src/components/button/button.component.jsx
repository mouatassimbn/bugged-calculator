const Button = ({ isOperation, text, classes = "", clickHandler }) => {
  return (
    <div className={`button-wrapper btn ${classes}`} onClick={clickHandler}>
      <div className="button-body">
        <p className={isOperation ? "is-operation" : ""}>{text}</p>
      </div>
    </div>
  );
};

export default Button;
