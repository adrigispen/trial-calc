import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Display from "./components/Display";
import InputPad from "./components/InputPad";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: "0",
      firstValue: "",
      operator: null,
      secondValue: ""
    };
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  addDigit = digit => {
    if (this.state.operator === null) {
      this.setState({
        firstValue: this.state.firstValue + digit,
        displayValue: this.state.firstValue + digit
      });
    } else {
      this.setState({
        secondValue: this.state.secondValue + digit,
        displayValue: this.state.secondValue + digit
      });
    }
  };

  setOperator = op => {
    let fV = this.state.firstValue;
    if (fV === "" && this.state.displayValue !== "0")
      fV = this.state.displayValue;
    this.setState({ operator: op, firstValue: fV });
  };

  calculate = () => {
    let a = Number(this.state.firstValue);
    let b = Number(this.state.secondValue);
    let result = 0;
    switch (this.state.operator) {
      case "divide":
        result = a / b;
        break;
      case "multiply":
        result = a * b;
        break;
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      default:
        result = 0;
    }
    this.setState({
      displayValue: result.toString(),
      firstValue: "",
      secondValue: "",
      operator: null
    });
  };

  clear = () => {
    this.setState({
      displayValue: "0",
      firstValue: "",
      operator: null,
      secondValue: ""
    });
  };

  render() {
    return (
      <div className="App">
        <Display displayValue={this.state.displayValue} />
        <InputPad
          addDigit={this.addDigit}
          setOperator={this.setOperator}
          calculate={this.calculate}
          clear={this.clear}
        />
      </div>
    );
  }
}

export default App;
