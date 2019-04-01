import React, { Component } from 'react';
import Timer from './timer';
import Lap from './lap';



class TimerContainer extends Component {

    state  = {
      seconds: 0,
      minutes: 0,
      laps:[],
      timerCount: Date.now(),
    }

  addLap = (lap) => {
      this.setState({
        laps: [...this.state.laps, lap]
      });
  }

  resetLaps = () => {
    const clearLaps = this.state.laps.map((laptime) => {
          return 0;
    });

    this.setState({
       laps: clearLaps
    })
  }

  incrementTimer = () => {
      let millis = Date.now() - this.state.timerCount;

    this.setState({
      seconds: Math.floor(millis/1000)
    });
  }



  globalReset = () => {
    clearInterval(this.startTimer);
    this.resetLaps();
    this.setState({
      seconds:0,
    });

  }

  localReset = (id) => {
    const lapReset = this.state.laps.map((lap, i) => {
          return id === i ? 0 : lap;

    })
    this.setState({
      laps: lapReset
    })
  }

  resetTimer = () => {
      clearInterval(this.startTimer);
      this.setState({
        seconds: 0
      })

  }
  componentDidMount(){
    this.startTimer = setInterval(this.incrementTimer, 1000)
  }


  render() {
    return (
      <div>
        <section>
          {this.state.laps.map((laptime, i) => {
            return <Lap localReset={this.localReset} key={i} id={i} laptime={laptime} reset={this.reset}  />
          })}
        </section>

      <Timer resetTimer={this.resetTimer} seconds={this.state.seconds} />

      <button onClick={() => {this.addLap(this.state.seconds)} }>record lap</button>
      <button onClick={this.globalReset}>global reset</button>
      </div>
    );
  }
}

export default TimerContainer;
