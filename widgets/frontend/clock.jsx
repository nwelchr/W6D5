import React from 'react';

class Clock extends React.Component {

  constructor () {
    super();
    this.state = { time: new Date () };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  tick () {
    let time = new Date();
    this.setState( { time } );
  }

  render () {
    const time = this.state.time;

    let minutes = time.getMinutes();
    if (minutes < 10) minutes = "0" + minutes.toString();

    let seconds = time.getSeconds();
    if (seconds < 10) seconds = "0" + seconds.toString();

    return (
      <div className="clock">
        <p>{time.getHours()}:{minutes}:{seconds}</p>
      </div>

    );
  }

}

export default Clock;
