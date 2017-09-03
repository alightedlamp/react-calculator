import React, { Component } from 'react';
import './css/styles.css';

import Header from './components/Header';
import Display from './components/Display';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      operation: '',
      currentNum: 0,
      lastNum: 0,
      result: 0
    }
  }
  render() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const controls = {
      clear: 'C',
      swapSign: '+/-',
      modulo: '%'
    }
    const operations = {
      divide: '/',
      multiple: 'x',
      plus: '+',
      minus: '-',
      equal: '='
    };
    return (
      <div className="CalculatorPanel">
        <Header />
        <Display currentNum={this.state.currentNum} result={this.state.result} />
        <div className="controls">
          {Object.keys(controls).map(control => <Button action={controls[control]} />)}
        </div>
        <div className="operations">
          {Object.keys(operations).map(operation => <Button action={operations[operation]} />)}
        </div>
        <div className="nums">
          {nums.map(num => <Button action={num} />)}
        </div>
      </div>
    );
  }
}

export default App;
