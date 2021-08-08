const Output = ({ currentNumber, history }) => {
  return (
    <div className="output-wrapper">
      <div className="output-body">
        <div className="output-operation"><p>test</p></div>
        <div className="output-number bold">{currentNumber}</div>
      </div>
    </div>
  );
};

export default Output;
