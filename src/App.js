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
      currentNum: '',
      lastNum: ''
    }

    this.routeAction = this.routeAction.bind(this);
    this.setCurrentNum = this.setCurrentNum.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.executeAction = this.executeAction.bind(this);
    this.computeResult = this.computeResult.bind(this);
  }
  routeAction(action) {
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
  setCurrentNum(num) {
    let next = '';
    if (this.state.currentNum === '0') {
      next = num;
    }
    else {
      next = String(this.state.currentNum) + num;
    }
    this.setState({ currentNum: next });
  }
  setOperator(operator) {
    let num = this.state.currentNum;
    if (num !== '') {
      this.setState({
        currentNum: '0',
        lastNum: num
      });
    }
    this.setState({ operator });
  }
  executeAction(action) {
    console.log("executing: " + action);
    let num = '';

    switch (action) {
      case 'C':
        this.setState({
          operator: '',
          currentNum: '',
          operator: '',
        });
        break;
      case '+/-':
        num = String(Number(this.state.currentNum) * -1);
        this.setState({ currentNum: num });
        break;
      case '%':
        num = String(Number(this.state.currentNum) / 100);
        this.setState({ currentNum: num });
        break;
      case '=':
        this.computeResult();
        break;
    }
  }
  computeResult() {
    console.log('computing');
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
      case '/':
        result = divide(x, y);
        break;
    }

    result = String(result);
    this.setState({
      lastNum: result,
      currentNum: result
     });
  }
  render() {
    return (
      <div className="CalculatorPanel">
        <Header />
        <Display currentNum={this.state.currentNum} result={this.state.result} />
        <div className="buttons">
          {buttons.map((button, i) => {
            let text = buttons[i][Object.keys(button)];
            let action = Object.keys(button);
            return <Button routeAction={this.routeAction} text={text} action={action} key={action}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
