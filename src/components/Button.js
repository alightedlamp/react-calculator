import React from 'react';

import { types } from '../helpers';

class Button extends React.Component {
  render() {
    const text = this.props.text;
    const routeAction = this.props.routeAction;

    // Sets button's class based on button category
    let type = '';
    if (text === 0) {
      type = 'num wide';
    }
    else if (text === '=') {
      type = 'operator';
    }
    else if (types.nums.indexOf(text) > -1) {
      type = 'num';
    }
    else if (types.controls.indexOf(text) > -1) {
      type = 'control';
    }
    else {
      type = 'operator';
    }

    return(
      <div className={`button ${type}`} onClick={() => routeAction(text)}>
        <p>{text}</p>
      </div>
      )
  }
}

export default Button;