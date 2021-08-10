import { Component } from "react";
import ButtonsGrid from "./components/buttons-grid/buttons-grid.component";
import ModeToggle from "./components/mode-toggle/mode-toggle.component";
import Output from "./components/output/output.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: true,
      history: "",
      currentNumber: "0",
    };
  }

  toggleMode = () => {
    this.setState((state) => ({ isDarkMode: !state.isDarkMode }));
  };

  buttonClick = (content) => {
    switch (content) {
      case ".":
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        this.setState((state) => ({
          currentNumber:
            state.currentNumber === "0"
              ? content
              : state.currentNumber + content,
        }));
        break;
      case "AC":
        this.setState({ currentNumber: "0", history: "" });
        break;
      case "backspace":
        this.setState(
          (state) => ({
            currentNumber:
              state.currentNumber !== "0"
                ? state.currentNumber.substring(
                    0,
                    state.currentNumber.length - 1
                  )
                : "0",
          }),
          () => {
            if (!this.state.currentNumber) {
              this.setState({ currentNumber: "0" });
            }
          }
        );
        break;
      case "±":
        this.setState((state) => ({
          currentNumber: state.currentNumber.includes("-")
            ? state.currentNumber.substring(1, state.currentNumber.length)
            : `- ${state.currentNumber}`,
        }));
        break;
      case "plus":
        this.setState((state) => ({
          history: `${(state.history += state.currentNumber)}+`,
          currentNumber: "0",
        }));
        break;
      case "equals":
        this.setState(
          (state) => ({
            history: `${(state.history += state.currentNumber)}`,
          }),
          () => this.calculate()
        );
        break;
    }
  };

  calculate = () => {
    const equation = this.state.history
      .split(/(\d+)/)
      .filter((itm) => itm)
      .map((item) => (isNaN(item) ? item : parseInt(item, 10)));

    let result = equation.shift();
    equation.forEach((itm, idx, arr) => {
      if (isNaN(itm)) {
        switch (itm) {
          case "+":
            result += arr[idx + 1];
            break;
          case "-":
            result -= arr[idx + 1];
          case "/":
            result /= arr[idx + 1];
          case "*":
          case "x":
            result *= arr[idx + 1];
            break;
        }
      }
    });

    this.setState({ currentNumber: result });
  };

  render() {
    return (
      <div
        className={`app-wrapper ${
          this.state.isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <div className="app-body container">
          <div className="app-header">
            <ModeToggle
              active={this.state.isDarkMode ? "dark" : "light"}
              lightClick={this.toggleMode}
              darkClick={this.toggleMode}
            />
          </div>
          <div className="app-screen bold">
            <Output
              currentNumber={this.state.currentNumber}
              history={this.state.history}
            />
          </div>
          <div className="app-content">
            <ButtonsGrid handleClick={this.buttonClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
