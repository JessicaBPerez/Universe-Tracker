import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import UniverseEvents from "./components/UniverseEvents";
import Info from "./components/Info.jsx";
import StarTracker from "./components/StarTracker.jsx";
import Weather from "./components/Weather";
import AdditionalInfoList from "./components/AdditionalInfoList";
import AdditionalInfoListDummy from "./components/AdditionalInfoListDummy";
import NasaPicOfTheDay from "./components/NasaPicOfTheDay";

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

  //Information that allows for Universe Event rendering on respective page
  componentDidMount() {
    axios.get(`/api/events`).then(response => {
      this.setState({
        events: response.data
      });
    });
  }

  render() {
    return (
      <div className="App hero-bkg-animated">
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={UniverseEvents} />
              />
              <Route exact path="/events/:id" component={Info} />
              <Route
                exact
                path="/events/:id/info"
                component={AdditionalInfoList}
              />
              <Route
                exact
                path="/events/:id/info/:infoId"
                component={AdditionalInfoListDummy}
              />
              <Route exact path="/tracker" component={StarTracker} />
              <Route exact path="/weather" component={Weather} />
              <Route exact path="/nasadaily" component={NasaPicOfTheDay} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
