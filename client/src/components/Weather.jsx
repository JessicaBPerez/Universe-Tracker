import React, { Component } from "react";
import axios from "axios";
import atlanta2 from "../images/atlanta-skyline.jpg";
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
        this.setState({
          weatherCity: response.data.city,
          weatherList: response.data.list,
          weatherMain: response.data.list[0].main.humidity,
          weatherMain2: response.data.list[1].main,
          actualWeatherDay1Description:
            response.data.list[0].weather[0].description,
          actualWeatherDay1Icon: response.data.list[0].weather[0].icon,
          actualWeatherDay1Main: response.data.list[0].weather[0].main,
          actualWeatherDay2: response.data.list[1].weather[0],
          actualWeatherDay3: response.data.list[2].weather[0],
          actualweatherDay2Description:
            response.data.list[1].weather[0].description,
          actualWeatherDay2Icon: response.data.list[1].weather[0].icon,
          actualWeatherDay3Description:
            response.data.list[2].weather[0].description,
          actualWeatherDay3Icon: response.data.list[2].weather[0].icon
        });
      })
      .catch(err => {
        console.log("You didn't get the weather!", err);
      });
  };
  render() {
    return (
      <div>
        <h1 className="glitch button-margin-all font-style">
          {" "}
          Weather in Real-Time
        </h1>
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div
            className="w3-card-4 w3-margin margin weather justify-content-center"
            style={{ width: "50%" }}
          >
            <div className="w3-display-container w3-text-white justify-content-center">
              <img
                src={atlanta2}
                alt="Lights"
                style={{ width: "100%", margin: "0 auto" }}
              />
              <div className="w3-xlarge w3-display-bottomleft w3-padding">
                <h1 className="atlanta">{this.state.weatherCity.name}</h1>
                <br />
                <h3 className="atlanta-small">
                  Humidity: {this.state.weatherMain}
                </h3>
              </div>
            </div>
            <div className="w3-row">
              <div className="w3-third w3-center">
                <h3 className="atlanta-small button-margin-all">
                  {" "}
                  {this.state.actualWeatherDay1Description}
                </h3>
                <img
                  className="border-style"
                  src={`http://openweathermap.org/img/w/${
                    this.state.actualWeatherDay1Icon
                  }.png`}
                  alt="weather icon"
                  style={{ width: "80px" }}
                />
              </div>
              <div className="w3-third w3-center">
                <h3 className="atlanta-small button-margin-all">
                  {this.state.actualweatherDay2Description}
                </h3>
                <img
                  className="border-style"
                  src={`http://openweathermap.org/img/w/${
                    this.state.actualWeatherDay2Icon
                  }.png`}
                  alt="weather icon"
                  style={{ width: "80px" }}
                />
              </div>
              <div className="w3-third w3-center w3-margin-bottom">
                <h3 className="atlanta-small button-margin-all">
                  {" "}
                  {this.state.actualWeatherDay3Description}
                </h3>
                <img
                  className="border-style"
                  src={`http://openweathermap.org/img/w/${
                    this.state.actualWeatherDay2Icon
                  }.png`}
                  alt="weather icon"
                  style={{ width: "80px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
