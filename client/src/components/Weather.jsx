import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Weather extends Component {
  state = {
    weather: []
  };

  componentDidMount = () => {
    this.getWeatherData();
  };

  getWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=30303,us&appid=92b35835bd441f64629db7ab72836041`
      )
      .then(response => {
        this.setState({
          weather: response.data
        });
      })
      .catch(err => {
        console.log("You didn't get the weather!", err);
      });
  };

  render() {
    return (
      <div>
        {/* {this.state.weather.map(weather => {
          return <div>City: {weather.weather.city}</div>;
        })} */}
        <h1> Where weather page will go.</h1>
      </div>
    );
  }
}

export default Weather;
