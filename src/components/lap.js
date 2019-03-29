import React, { Component } from 'react';


class Lap extends Component {


  render() {
    // console.log("id:",this.props.id)
    return (
      <div id={this.props.id} className="border">
        <div>{this.props.laptime}</div>

        <button onClick ={() => this.props.localReset(this.props.id)}> reset</button>
      </div>
    );
  }
}

export default Lap;
