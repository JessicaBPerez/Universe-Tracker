/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleEvent: this.props.match.params.id,

      info: {
        eventImg: "",
        eventName: "",
        eventCategoryThreat: "",
        eventLocation: "",
        eventDescription: "",
        additionalInfo: []
      },
      isEventEditFormDisplayed: false,
      redirectToHome: false,
      updateConfirmationDisplay: false,
      show: false
    };
  }

  componentDidMount = () => {
    this.getSingleEvent();
  };

  toggleUpdateConfirmationMessage = () => {
    this.setState({
      updateConfirmationDisplay: !this.state.updateConfirmationDisplay
    });
  };

  getSingleEvent = () => {
    axios
      .get(`/api/events/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          info: response.data
        });
      })
      .catch(err => {
        console.log("Go back, you goffy goober!", err);
      });
  };

  //Deletes and event
  deleteAnEvent = () => {
    axios.delete(`/api/events/${this.props.match.params.id}`).then(response => {
      this.setState({ redirectToHome: true });
    });
  };

  //Toggles event Edit Form
  displayEventEditForm = () => {
    this.setState((state, props) => {
      return {
        isEventEditFormDisplayed: !state.isEventEditFormDisplayed
      };
    });
  };

  //Handles form change event value
  handleFormChange = event => {
    //Preserves Event State
    const copyInfo = { ...this.state.info };
    copyInfo[event.target.name] = event.target.value;
    this.setState({ info: copyInfo });
  };

  updateInfo = event => {
    event.preventDefault();
    axios
      .put(`/api/events/${this.props.match.params.id}`, {
        eventImg: this.state.info.eventImg,
        eventName: this.state.info.eventName,
        eventCategoryThreat: this.state.info.eventCategoryThreat,
        eventLocation: this.state.info.eventLocation,
        eventDescription: this.state.info.eventDescription
      })
      .then(response => {
        this.displayEventEditForm();
        this.toggleUpdateConfirmationMessage();
      });
  };

  componentDidMount() {
    this.getIndividualEvent();
  }

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div>
          <h1 className="glitch button-margin-all font-style">
            Delete or Edit this Fact
          </h1>
        </div>
        <div
          className=" justify-content-center container"
          style={{ width: "90rem" }}
        >
          <div className="row align-items-center large-card-style">
            <div className="col-md-6">
              <img
                alt={this.state.info.eventName}
                className="img-fluid rounded"
                src={this.state.info.eventImg}
              />
            </div>
            <div className="col-md-6 category-design text-white">
              <h3>{this.state.info.eventName}</h3>
              <Link to={`${this.state.info._id}/info`}>
                <p className="additional-facts">Additional Facts</p>
              </Link>
              <div>
                <p>
                  <strong>Event Category Threat: </strong>
                  {this.state.info.eventCategoryThreat}
                </p>
              </div>
              <div>
                <p>
                  <strong>Event Location: </strong>
                  {this.state.info.eventLocation}
                </p>
              </div>
              <div className="getting-started-info">
                <p>
                  <strong>Event Description: </strong>
                  {this.state.info.eventDescription}
                </p>
              </div>

              <button
                onClick={this.deleteAnEvent}
                className="btn btn-outline-danger main"
              >
                Delete
              </button>
              <button
                onClick={this.displayEventEditForm}
                className="btn btn-outline-light button-margin"
              >
                Show Edit Form
              </button>
            </div>
          </div>
        </div>
        <div>
          <br />
          <br />
          <section className="clean-block clean-form dark">
            <div className="container">
              {this.state.isEventEditFormDisplayed ? (
                <form onSubmit={this.updateInfo}>
                  <div className="form-group">
                    <label htmlFor="eventImg">Event Image</label>
                    <input
                      className="form-control"
                      id="eventImg"
                      type="text"
                      name="eventImg"
                      onChange={this.handleFormChange}
                      value={this.state.info.eventImg || ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventName">Event Name</label>
                    <input
                      className="form-control"
                      id="eventName"
                      type="text"
                      name="eventName"
                      onChange={this.handleFormChange}
                      value={this.state.info.eventName || ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription">Event Description</label>
                    <textarea
                      className="form-control"
                      id="eventDescription"
                      type="text"
                      name="eventDescription"
                      onChange={this.handleFormChange}
                      value={this.state.info.eventDescription || ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventCategoryThreat">Event Threat</label>
                    <input
                      className="form-control"
                      id="eventCategoryThreat"
                      type="text"
                      name="eventCategoryThreat"
                      onChange={this.handleFormChange}
                      value={this.state.info.eventCategoryThreat || ""}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventLocation">Event Location</label>
                    <input
                      className="form-control"
                      id="eventLocation"
                      type="text"
                      name="eventLocation"
                      onChange={this.handleFormChange}
                      value={this.state.info.eventLocation || ""}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-dark btn-block"
                      type="submit"
                      value="submit"
                    >
                      Edit Event
                    </button>
                  </div>
                </form>
              ) : null}
              {this.state.updateConfirmationDisplay ? (
                <div>
                  <h1>Event has been updated.</h1>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Info;
