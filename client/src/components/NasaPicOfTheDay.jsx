import React, { Component } from "react";
import Axios from "axios";
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

export default class NasaPicOfTheDay extends Component {
  state = {
    nasaPicDaily: []
  };

  componentDidMount = async () => {
    await this.getNasaData();
  };

  getNasaData = () => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
  }
  render() {
    return (
      <div>
        <h1 className="text-white">Nasa Pic of the Day</h1>
      </div>
    );
  }
}
