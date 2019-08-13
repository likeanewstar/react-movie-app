import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({count: current.count + 1}));
    // current === this.state 
    // setState 할 때 react를 외부에 의존시키지 않는 가장 좋은 방법
  };
  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
