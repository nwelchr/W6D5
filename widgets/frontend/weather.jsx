import React from 'react';
class Weather extends React.Component {

  constructor(){
    super();
    this.state = {};
    this.getWeather = this.getWeather.bind(this);
  }
  // position.coords.latitude, position.coords.longitude

  componentDidMount(){
    console.log("test");
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(location) {
    debugger;
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    console.log(location);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`, true);
    xhr.onload = function(){
      console.log(arguments);
    };
    xhr.send();
  }

  render() {
    return (
      <div className="weather">
        This is the weather!!!! Get into it
      </div>
    );
  }

}

export default Weather;
