const Button = ({ isOperation, text, clickHandler}) => {
  return (
    <div className="button-wrapper btn" onClick={clickHandler}>
      <div className="button-body">
        <p className={(isOperation)? "is-operation" : ""}>{text}</p>
      </div>
    </div>
  );
};

export default Button;
