import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    firstNumber: "",
    secondNumber: "",
    function: "",
    screenNumber: "",
  }

  addNumber = number => {
    if (this.state.function) {
      this.setState({
        secondNumber: this.state.secondNumber + number,
        screenNumber: this.state.secondNumber
      });

    } else {
      this.setState({
        firstNumber: this.state.firstNumber + number,
        screenNumber: this.state.firstNumber
      });
    }
  }

  plus = () => {
    this.setState({
      function: "+",
      screenNumber: "+"
    });
  }

  minus = () => {
    this.setState({
      function: "-",
      screenNumber: "-"
    });
  }

  divide = () => {
    this.setState({
      function: "/",
      screenNumber: "/"
    });
  }

  multiply = () => {
    this.setState({
      function: "*",
      screenNumber: "*"
    });
  }

  equals = () => {
    alert("First: " + this.state.firstNumber + " " + this.state.function + " " + "Second: " + this.state.secondNumber);

    if (this.state.function === "+") {
      this.setState({ screenNumber: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber) });
    } else if (this.state.function === "-") {
      this.setState({ screenNumber: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber) });
    } else if (this.state.function === "/") {
      this.setState({ screenNumber: parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber) });
    } else if (this.state.function === "*") {
      this.setState({ screenNumber: parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber) });
    }
  }

  reset = () => {
    this.setState({
      firstNumber: "",
      secondNumber: "",
      function: "",
      screenNumber: "",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.screenNumber}</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(1)}>1</div>
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(2)}>2</div>
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(3)}>3</div>
          </div>

          <div className="row">
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(4)}>4</div>
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(5)}>5</div>
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(6)}>6</div>
          </div>

          <div className="row">
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(7)}>7</div>
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(8)}>8</div>
            <div className="col-sm btn btn-primary" onClick={() => this.addNumber(9)}>9</div>
          </div>

          <div className="row">
            <div className="col-sm">
              <button type="button" className="btn btn-primary" onClick={() => this.plus()}>+</button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-primary" onClick={() => this.minus()}>-</button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-primary" onClick={() => this.divide()}>/</button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-primary" onClick={() => this.multiply()}>*</button>
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <button type="button" className="btn btn-primary" onClick={() => this.equals()}>=</button>
            </div>
            <div className="col-sm">
              <button type="button" className="btn btn-primary" onClick={() => this.reset()}>C</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
