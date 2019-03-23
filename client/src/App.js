import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import UniverseEvents from "./components/UniverseEvents";
import Info from "./components/Info.jsx";
import styled, { keyframes } from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      newEvents: {
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
        events: response.data
      });
    });
  }

  render() {
    return (
      <div className="App background">
        <div>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/" component={UniverseEvents} />
              {/* <Route exact path="/events/:id/info/:infoId" component={Info} /> */}
              <Route path="/events/:id" component={Info} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
