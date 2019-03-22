import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class UniverseEvents extends Component {
  state = {
    facts: [],
    newFacts: {
      eventImg: "",
      eventName: "",
      eventCategoryThreat: "",
      eventLocation: "",
      eventDescription: "",
      additionalInfo: []
    },
    isUniverseEventFormDisplayed: false
  };

  //2. use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    console.log("Hey! You got me!!");
    this.getAllFacts();
  };

  //Function to get all Facts from axios via our API
  getAllFacts = () => {
    axios
      .get(`/api/events`)
      .then(response => {
        console.log(response.data);
        const facts = response.data;
        this.setState({ facts: facts });
      })
      .catch(err => {
        console.log("You messed up somewhere, Jess. Go back!", err);
      });
  };

  render() {
    return (
      <div>
        <h1>This is where your Universe Events will go.</h1>
      </div>
    );
  }
}

export default UniverseEvents;
