import React, { Component } from 'react';


class Timer extends Component {

  render() {
    return (
      <div id={this.props.id} className="border">
        <div>{this.props.seconds}</div>
        <button onClick={() => this.props.resetTimer() }>reset Timer</button>
      </div>
    );
  }
}

export default Timer;
