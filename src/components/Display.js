import React from 'react';

class Display extends React.Component {
  render() {
    const currentNum = this.props.currentNum;
    const lastNum = this.props.lastNum;
    const final = this.props.final;
    const num = final ? lastNum : currentNum;

    return(
      <div className="display">
        <div className="result">
          {num}
        </div>
      </div>
      )
  }
}

export default Display;