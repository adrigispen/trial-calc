import React from "react";
import axios from "axios";

class Display extends React.Component {
  constructor() {
    super();
    this.state = { fact: "" };
  }

  componentDidUpdate(prevProps) {
    if (this.props.displayValue !== prevProps.displayValue) {
      let num = parseInt(this.props.displayValue);
      let type = ["trivia", "math", "year"][num % 3];
      axios
        .get(`http://numbersapi.com/${num}/${type}`)
        .then(response => {
          this.setState({ fact: response.data });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div className="results">
        <h2>{this.props.displayValue}</h2>
        <label>{this.state.fact}</label>
      </div>
    );
  }
}

export default Display;
