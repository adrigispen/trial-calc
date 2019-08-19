import React from "react";
import { Button } from "react-bootstrap";

export default function InputPad(props) {
  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <Button onClick={() => props.addDigit("7")}>7</Button>
          <Button onClick={() => props.addDigit("8")}>8</Button>
          <Button onClick={() => props.addDigit("9")}>9</Button>
          <Button
            onClick={() => props.setOperator("divide")}
            className="btn-secondary"
          >
            ÷
          </Button>
        </div>
        <div className="row">
          <Button onClick={() => props.addDigit("4")}>4</Button>
          <Button onClick={() => props.addDigit("5")}>5</Button>
          <Button onClick={() => props.addDigit("6")}>6</Button>
          <Button
            onClick={() => props.setOperator("multiply")}
            className="btn-secondary"
          >
            x
          </Button>
        </div>
        <div className="row">
          <Button onClick={() => props.addDigit("1")}>1</Button>
          <Button onClick={() => props.addDigit("2")}>2</Button>
          <Button onClick={() => props.addDigit("3")}>3</Button>
          <Button
            onClick={() => props.setOperator("subtract")}
            className="btn-secondary"
          >
            -
          </Button>
        </div>
        <div className="row">
          <Button onClick={() => props.addDigit("0")}>0</Button>
          <Button onClick={() => props.addDigit(".")}>.</Button>
          <Button onClick={props.clear}>C</Button>
          <Button
            onClick={() => props.setOperator("add")}
            className="btn-secondary"
          >
            +
          </Button>
        </div>
        <div className="row">
          <Button onClick={props.calculate} className="btn-secondary enter">
            =
          </Button>
        </div>
      </div>
    </div>
  );
}
