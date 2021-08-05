import { Component } from "react";
import ButtonsGrid from "./components/buttons-grid/buttons-grid.component";
import ModeToggle from "./components/mode-toggle/mode-toggle.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDarkMode: true,
    };
  }

  toggleMode = () => {
    this.setState((state) => ({ isDarkMode: !state.isDarkMode }));
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
            <p>123.55</p>
          </div>
          <div className="app-content">
            <ButtonsGrid />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
