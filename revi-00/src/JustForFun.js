import React, { Component } from 'react';
import { func } from 'prop-types';

class JustForFun extends Component {
  static propTypes = {
    onHandleCounterMutated: func.isRequired
  };

  handleButtonCounterClick = op => {
    this.props.onHandleCounterMutated(op);
  };

  render() {
    return (
      <div className="just-for-fun-wrapper">
        <ul>
          <li>
            <button type="button" onClick={() => this.handleButtonCounterClick('+')}>Plus plus</button>
          </li>
          <li>
            <button type="button" onClick={() => this.handleButtonCounterClick('-')}>Min min</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default JustForFun;
