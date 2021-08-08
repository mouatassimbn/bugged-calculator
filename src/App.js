import { Component } from "react";
import ButtonsGrid from "./components/buttons-grid/buttons-grid.component";
import ModeToggle from "./components/mode-toggle/mode-toggle.component";
import Output from "./components/output/output.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: true,
      operation: "",
      currentNumber: "12,936",
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
          currentNumber: state.currentNumber + content,
        }));
        break;
      case "AC":
        this.setState({ currentNumber: "" });
        break;
      case "backspace":
        this.setState((state) => ({
          currentNumber: state.currentNumber.substring(
            0,
            state.currentNumber.length - 1
          ),
        }));
        break;
      case "±":
        this.setState((state) => ({
          currentNumber: state.currentNumber.includes("-")
            ? state.currentNumber.substring(1, state.currentNumber.length)
            : `- ${state.currentNumber}`,
        }));
        break;
    }
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
            <Output currentNumber={this.state.currentNumber} />
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
