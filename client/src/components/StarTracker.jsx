import React, { Component } from "react";
import axios from "axios";
import armstrong from "../audio/Armstrong.mp3";
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

class StarTracker extends Component {
  constructor() {
    super();
    this.state = {
      marsRover: []
    };
  }

  componentDidMount() {
    this.getAllStars();
  }

  getAllStars = () => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${NASA_API_KEY}`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          marsRover: response.data,
          marsRoverMachine: response.data.photos[0].rover.name,
          marsRover1EarthDay: response.data.photos[0].earth_date,
          marsRover1Photo: response.data.photos[0].img_src,
          marsRover1Sol: response.data.photos[0].sol,
          marsRover2EarthDay: response.data.photos[5].earth_date,
          marsRover2Photo: response.data.photos[5].img_src,
          marsRover2Sol: response.data.photos[5].sol,
          marsRover3EarthDay: response.data.photos[17].earth_date,
          marsRover3Photo: response.data.photos[17].img_src,
          marsRover3Sol: response.data.photos[17].sol
        });
      })
      .catch(err => {
        console.log("You didn't get the Mars data!", err);
      });
  };

  render() {
    return (
      <div>
        <div className="container button-margin-all">
          <h1 className="glitch button-margin-all font-style">
            Mars Rover Tracker
          </h1>
          <div class="card bg-dark text-white button-margin-all">
            <img
              src={this.state.marsRover1Photo}
              className="card-img rover-img"
              alt="Mars Rover"
            />
            <div className="card-img-overlay">
              <h3 className="card-title rover-caption">
                NAME: {this.state.marsRoverMachine}
              </h3>
              <p className="card-text rover-small">
                Earth Day: {this.state.marsRover1EarthDay}
              </p>
              <p className="card-text rover-small">
                Sol: {this.state.marsRover1Sol}
              </p>
            </div>
          </div>
        </div>
        <div className="container button-margin-all">
          <div class="card bg-dark text-white">
            <img
              src={this.state.marsRover2Photo}
              className="card-img rover-img"
              alt="Mars Rover"
            />
            <div className="card-img-overlay">
              <h3 className="card-title rover-caption">
                NAME: {this.state.marsRoverMachine}
              </h3>
              <p className="card-text rover-small">
                Earth Day: {this.state.marsRover2EarthDay}
              </p>
              <p className="card-text rover-small">
                Sol: {this.state.marsRover2Sol}
              </p>
            </div>
          </div>
        </div>
        <div className="container button-margin-all rover-img">
          <div className="card bg-dark text-white">
            <img
              src={this.state.marsRover3Photo}
              className="card-img rover-img"
              alt="Mars Rover"
            />
            <div className="card-img-overlay rover-img">
              <h3 className="card-title rover-caption">
                NAME: {this.state.marsRoverMachine}
              </h3>
              <p className="card-text rover-small">
                Earth Day: {this.state.marsRover3EarthDay}
              </p>
              <p className="card-text rover-small">
                Sol: {this.state.marsRover3Sol}
              </p>
            </div>
          </div>
        </div>
        <div className="button-margin-all">
          <audio src={armstrong} controls autoPlay />
        </div>
      </div>
    );
  }
}

export default StarTracker;
