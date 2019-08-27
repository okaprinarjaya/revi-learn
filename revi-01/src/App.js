import React, { Component } from 'react';

import JustForFun from './JustForFun';

import './itismystyles.scss';

class App extends Component {
  state = {
    counter: 0
  };

  handleCounterMutated = op => {
    if (op === '+') {
      this.setState(prevState => {
        return {
          counter: prevState.counter + 1
        }
      });

    } else if (op === '-') {
      this.setState(prevState => {
        return {
          counter: prevState.counter - 1
        }
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="heading-hello">Hello welcome</h1>
        <p className="par">
          Welcome to da house. We will learn to build react environment
        </p>

        <p className="par">Counter: {this.state.counter}</p>

        <JustForFun onHandleCounterMutated={this.handleCounterMutated} />
      </React.Fragment>
    )
  }
}

export default App;
