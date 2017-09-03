import React from 'react';
import Result from './Result';

class Display extends React.Component {
  render() {
    const currentNum = this.props.currentNum;
    const result = this.props.result;
    return(
      <div className="display">
        <div className="result">
          <Result />
        </div>
      </div>
      )
  }
}

export default Display;