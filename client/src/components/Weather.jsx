import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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
        `https://api.openweathermap.org/data/2.5/forecast?zip=30303,us&appid=${WEATHER_API_KEY}`
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
        <h1 className="text-white">{this.state.weather.cnt}</h1>
        <h1 className="text-white">{this.state.weather.cnt}</h1>

        {/* <h1 className="text-white">{this.state.weather}</h1> */}
      </div>
    );
  }
}

export default Weather;
