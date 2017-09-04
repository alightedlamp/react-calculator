import React from 'react';

class Display extends React.Component {
  render() {
    const currentNum = this.props.currentNum > 0 ? this.props.currentNum : 0;

    return(
      <div className="display">
        <div className="result">
          {currentNum}
        </div>
      </div>
      )
  }
}

export default Display;