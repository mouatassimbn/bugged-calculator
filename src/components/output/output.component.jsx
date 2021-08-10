const Output = ({ currentNumber, history }) => {
  let outputHistory = (history) => {
    return history.split("").map((char) => {
      let result = [];
      if (char.match(/[+-/x*]/g)) {
        result.push(`<span class="is-operation">${char}</span>`);
      } else {
        result.push(char);
      }
      return result;
    }).join("");
  };
  return (
    <div className="output-wrapper">
      <div className="output-body">
        <div
          className="output-operation"
          dangerouslySetInnerHTML={{ __html: outputHistory(history) }}
        ></div>
        <div className="output-number bold">{currentNumber}</div>
      </div>
    </div>
  );
};

export default Output;
