import React from 'react';

class Button extends React.Component {
  render() {
    const text = this.props.action;
    return(
      <div className="button">
        <p>{text}</p>
      </div>
      )
  }
}

export default Button;