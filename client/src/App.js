import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  //Information that allows for rendering on respective page
  componentDidMount() {
    axios.get(`/api/events`).then(response => {
      this.setState({
        facts: response.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route />
          </Switch>
        </Router>
        <h1>Hey, Jess. This is where your app will go.</h1>
      </div>
    );
  }
}

export default App;
