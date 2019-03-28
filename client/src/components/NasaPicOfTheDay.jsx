/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import axios from "axios";
import enceladus from "../audio/Enceladus_Hiss_audio.mp3";
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

export default class NasaPicOfTheDay extends Component {
  state = {
    nasaPicDaily: []
  };

  componentDidMount = () => {
    this.getNasaData();
  };

  getNasaData = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then(response => {
        this.setState({
          nasaPicDaily: response.data
        });
      })
      .catch(err => {
        console.log("You didn't get the Nasa Daily data", err);
      });
  };

  render() {
    return (
      <div>
        <h1 className="glitch button-margin-all font-style">
          Nasa Pic of the Day
        </h1>
        <div
          className=" justify-content-center container"
          style={{ width: "90rem" }}
        >
          <div className="row align-items-center large-card-style">
            <div className="col-md-6">
              <img
                alt="Nasa Picture od the Day"
                className="img-fluid rounded"
                src={this.state.nasaPicDaily.hdurl}
              />
            </div>
            <div className="col-md-6 category-design text-white">
              <h3>{this.state.nasaPicDaily.title}</h3>
              <div>
                <p>
                  <strong>Date: </strong>
                  {this.state.nasaPicDaily.date}
                </p>
              </div>
              <div className="getting-started-info">
                <p>
                  <strong>Event Description: </strong>
                  {this.state.nasaPicDaily.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-margin-all audio-margin">
          <audio src={enceladus} controls autoPlay />
        </div>
      </div>
    );
  }
}
