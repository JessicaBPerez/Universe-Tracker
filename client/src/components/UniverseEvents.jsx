import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Info from "./Info.jsx";

class UniverseEvents extends Component {
  state = {
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

  //Use the componentDidMount lifecycle method
  // to execute our API call as soon as the component mounts
  componentDidMount = () => {
    console.log("Hey! You got me!!");
    this.getAllEvents();
  };

  //what I JUST added
  componentDidMount() {
    console.log("infoId: ", this.props.match.params.infoId);
    console.log("Hey, you're getting each event!");
    this.getIndividualEvent();
  }
  //Here too
  //   getIndividualEvent = () => {
  //     axios
  //       .get(
  //         `/api/events/${this.props.match.params.id}/info/${
  //           this.props.match.params.infoId
  //         }`
  //       )
  //       .then(response => {
  //         console.log(response.data);

  //         this.setState({
  //           info: response.data
  //         });
  //       })
  //       .catch(err => {
  //         console.log("Go back, goof!", err);
  //       });
  //   };

  //Function to get all Facts from axios via our API
  getAllEvents = () => {
    axios
      .get(`/api/events`)
      .then(response => {
        console.log(response.data);
        const events = response.data;
        this.setState({ events: events });
      })
      .catch(err => {
        console.log("You messed up somewhere, Jess. Go back!", err);
      });
  };

  //Creates a New Event
  createAnEvent = event => {
    event.preventDefault();
    axios
      .post("/api/events", {
        eventImg: this.state.newEvents.eventImg,
        eventName: this.state.newEvents.eventName,
        eventCategoryThreat: this.state.newEvents.eventCategoryThreat,
        eventLocation: this.state.newEvents.eventLocation,
        eventDescription: this.state.newEvents.eventDescription,
        additionalInfo: this.state.newEvents.additionalInfo
      })
      .then(response => {
        const eventList = [...this.state.events];
        eventList.push(response.data);
        this.setState({
          newEvents: {
            eventImg: "",
            eventName: "",
            eventCategoryThreat: "",
            eventLocation: "",
            eventDescription: "",
            additionalInfo: []
          },
          isUniverseEventFormDisplayed: false,
          events: eventList
        });
      });
  };

  //   createAnEvent = event => {
  //     event.preventDefault();
  //     axios.post(`/api/events`).then(response => {
  //       console.log("Hey, this is my response", response.data);
  //       const newEvents = [this.state.events];
  //       newEvents.unshift(response.data);
  //       this.setState({
  //         events: newEvents
  //       });
  //     });
  //   };

  //Toggles the Edit form
  displayUniverseEventForm = () => {
    this.setState((state, props) => {
      return {
        isUniverseEventFormDisplayed: !state.isUniverseEventFormDisplayed
      };
    });
  };

  //Handles form change event value
  handleFormChange = event => {
    //Preserves Event State
    const cloneNewEvent = { ...this.state.newEvent };
    cloneNewEvent[event.target.name] = event.target.value;
    this.setState({ newEvents: cloneNewEvent });
  };

  render() {
    const events = this.state.events.map((event, index) => {
      //   let pathname = `/events/${event._id}/info/${event.additionalInfo[0]._id}`;
      let pathname = `/events/${event._id}`;
      return (
        <div>
          <div>
            <div>
              {/* <img src={event.eventImg} alt={event.eventName} /> */}
            </div>
            {/* <Link to={pathname}>{event.eventName}</Link> */}
            {/* <div>{event.eventCategoryThreat}</div>
          <div>{event.eventLocation}</div>
          <div>{event.eventDescription}</div> */}

            {/* <div>{event.additionalInfo}</div> */}
            <section className="flex-container card-flex card-margin">
              <div className="card" style={{ width: "30rem" }}>
                <img
                  className="card-img-top"
                  src={event.eventImg}
                  alt={event.eventName}
                />
                <div className="card-body">
                  <p className="card-text">
                    <Link to={pathname}>{event.eventName}</Link>
                  </p>
                  <p>Category Threat: {event.eventCategoryThreat}</p>
                  <p>Event Location: {event.eventLocation}</p>
                  <p>Event Description: {event.eventDescription}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    });
    return (
      <div>
        {events}

        <h1>This is where your Universe Events will go.</h1>
        <h3>New Event Below</h3>
        <button onClick={this.displayUniverseEventForm}>Add New Event</button>
        <div>
          <strong>Create a New Universe Event</strong>
          {this.state.isUniverseEventFormDisplayed ? (
            <form onSubmit={this.createAnEvent}>
              <div>
                <label htmlFor="eventImg">Event Image</label>
                <input
                  id="eventImg"
                  type="text"
                  name="eventImg"
                  onChange={this.handleFormChange}
                  value={this.state.newEvents.eventImg}
                />
              </div>
              <div>
                <label htmlFor="eventName">Event Name</label>
                <input
                  id="eventName"
                  type="text"
                  name="eventName"
                  onChange={this.handleFormChange}
                  value={this.state.newEvents.eventName}
                />
              </div>
              <div>
                <label htmlFor="eventCategoryThreat">Event Threat</label>
                <input
                  id="eventCategoryThreat"
                  type="text"
                  name="eventCategoryThreat"
                  onChange={this.handleFormChange}
                  value={this.state.newEvents.eventCategoryThreat}
                />
              </div>
              <div>
                <label htmlFor="eventLocation">Event Location</label>
                <input
                  id="eventLocation"
                  type="text"
                  name="eventLocation"
                  onChange={this.handleFormChange}
                  value={this.state.newEvents.eventLocation}
                />
              </div>
              <div>
                <label htmlFor="eventDescription">Event Description</label>
                <textarea
                  id="eventDescription"
                  type="text"
                  name="eventDescription"
                  onChange={this.handleFormChange}
                  value={this.state.newEvents.eventDescription}
                />
              </div>
              <button>CreateIt!</button>
            </form>
          ) : null}
        </div>
      </div>
    );
  }
}

export default UniverseEvents;
