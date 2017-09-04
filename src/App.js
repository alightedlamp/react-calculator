import React, { Component } from 'react';
import './css/styles.css';

import { buttons, types, add, subtract, multiply, divide } from './helpers';

import Header from './components/Header';
import Display from './components/Display';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      operator: '',
      currentNum: '0',
      lastNum: '',
      final: false
    }
  }
  // Sends action to the appropraite function based on button type
  routeAction = (action) => {
    if (types.nums.indexOf(action) > -1) {
      this.setCurrentNum(action);
    }
    else if (types.operators.indexOf(action) > -1) {
      this.setOperator(action);
    }
    else if (types.controls.indexOf(action) > -1) {
      this.executeAction(action);
    }
  }
  // Sets current number in state
  setCurrentNum = (num) => {
    let next = '';
    if (this.state.currentNum === '0') {
      next = num;
    }
    else {
      next = String(this.state.currentNum) + num;
    }
    this.setState({ currentNum: next });
  }
  // Sets current operator choice in state
  setOperator = (operator) => {
    let num = this.state.currentNum;
    // If current number isn't zero, and an operator is chosen
    if (num !== '0') {
      this.setState({
        currentNum: '0',
        lastNum: num
      });
    }
    // If an operator has already been chosen and it isn't the final choice, compute result then move on
    if (this.state.operator && !this.state.final) {
      this.computeResult();
    }
    this.setState({ operator });
  }
  // Executes an action on the currentNumber or routes to the final answer
  executeAction = (action) => {
    let num = '';

    switch (action) {
      case 'C': // Clear
        this.setState({
          operator: '',
          currentNum: '0',
          lastNum: '',
          final: false
        });
        break;
      case '+/-': // Swap sign
        num = String(Number(this.state.currentNum) * -1);
        this.setState({ currentNum: num });
        break;
      case '%': // Percentage
        num = String(Number(this.state.currentNum) / 100);
        this.setState({ currentNum: num });
        break;
      case '=': // Compute result
        this.setState({ final: true });
        this.computeResult();
        break;
      default:
        console.log('Invalid action');
    }
  }
  // Computes result based on two numbers and chosen operator
  computeResult = () => {
    let x = parseFloat(this.state.lastNum);
    let y = parseFloat(this.state.currentNum);

    let result = 0;

    switch (this.state.operator) {
      case '+':
        result = add(x, y);
        break;
      case '-':
        result = subtract(x, y);
        break;
      case 'x':
        result = multiply(x, y);
        break;
      case '÷':
        result = divide(x, y);
        break;
      default:
        console.log('Invalid operation');
    }

    result = String(result);
    this.setState({
      lastNum: result
     });
  }
  render() {
    return (
      <div className="CalculatorPanel">
        <Header />
        <Display lastNum={this.state.lastNum} currentNum={this.state.currentNum} final={this.state.final} />
        <div className="buttons">
          {buttons.map((button, i) => <Button routeAction={this.routeAction} text={button} key={`button-${i}`}/>)}
        </div>
      </div>
    );
  }
}

export default App;
