/* eslint-disable jsx-a11y/heading-has-content */
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Weather extends Component {
  state = {
    weatherCity: [],
    weatherList: []
  };

  componentDidMount = async () => {
    await this.getWeatherData();
  };

  getWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=30303,us&appid=${WEATHER_API_KEY}`
      )
      .then(response => {
        // console.log(response.data);
        this.setState({
          weatherCity: response.data.city,
          weatherList: response.data.list,
          weatherMain: response.data.list[0].main,
          weatherMain2: response.data.list[1].main,
          actualWeatherDay1Description: response.data.list[0].weather[0].description,
          actualWeatherDay1Icon: response.data.list[0].weather[0].icon,
          actualWeatherDay2: response.data.list[1].weather[0],
          actualWeatherDay3: response.data.list[2].weather[0]
        });
        console.log(response.data)
      })
      .catch(err => {
        console.log("You didn't get the weather!", err);
      });
  };
  render() {
    return (
      <div>
        {/* {this.state.weather.map(weather => {
          return <div>City: {this.state.weather.list.city}</div>;
        })} */}

        <h1> Where weather page will go.</h1>
        {/* <h1 className="text-white">{this.state.weather.cnt}</h1>
        <h1 className="text-white">{this.state.weather.cnt}</h1> */}
        <h1>{this.state.weatherCity.name}</h1>
        <h1>{this.state.weatherCity.country}</h1>
        <h1>{this.state.weatherCity.id}</h1>

        {this.state.actualWeatherDay1Description}
        <img src={this.state.actualWeatherDay1Icon} />
        {this.state.actualWeatherDay1Icon}
        {/* <h1>{this.state.actualWeatherDay1.description}</h1> */}
        {this.state.weatherList.map(weather => {
          return <div>{weather.dt}</div>;
        })}
        {/* <h1 className="text-white">{this.state.weather}</h1> */}
      </div>
    );
  }
}

export default Weather;
