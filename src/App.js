import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerContainer from './components/timer_container';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TimerContainer />
      </div>
    );
  }
}

export default App;
