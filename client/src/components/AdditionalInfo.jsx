import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class AdditionalInfo extends Component {
  state = {
    additionalFacts: [],
    newFacts: {
      infoImg: "",
      randomFacts: "",
      nextMajorEvent: "",
      eventDescription: "",
      threatLevel: "",
      info: []
    },
    isAdditionalInfoFormDisplayed: false,
    redirectToAdditionalInfo: false
  };

  //Get Additional Info
  componentDidMount() {
    console.log("infoId: ", this.props.match.params.infoId);
    console.log("Hey, you're getting each additional info!!");
    this.getAdditionalInfo();
  }
  //Here too
  getAdditionalInfo = () => {
    axios
      .get(
        `/api/events/${this.props.match.params.id}/info/${
          this.props.match.params.infoId
        }`
      )
      .then(response => {
        console.log(response.data);

        this.setState({
          additionalFacts: response.data
        });
      })
      .catch(err => {
        console.log("Go back, goof!", err);
      });
  };

  //Toggles Fact form
  displayAdditionalInfoForm = () => {
    this.setState((state, props) => {
      return {
        isAdditionalInfoFormDisplayed: !state.isAdditionalInfoFormDisplayed
      };
    });
  };

  //Handles Form Change on Facts
  handleFormChange = event => {
    //Preserves Event State
    const cloneNewFacts = { ...this.state.newFacts };
    cloneNewFacts[event.target.name] = event.target.value;
    this.setState({ newFacts: cloneNewFacts });
  };

  createANewFact = event => {
    event.preventDefault();
    axios
      .post(
        `/api/events/${this.props.match.params.id}/info/${
          this.props.match.params.infoId
        }`,
        {
          infoImg: this.state.newFacts.infoImg,
          randomFacts: this.state.newFacts.randomFacts,
          nextMajorEvent: this.state.newFacts.nextMajorEvent,
          eventDescription: this.state.newFacts.eventDescription,
          threatLevel: this.state.newFacts.threatLevel
        }
      )
      .then(response => {
        const factList = { ...this.state.additionalFacts };
        factList.push(response.data);
        this.setState({
          newFacts: {
            infoImg: "",
            randomFacts: "",
            nextMajorEvent: "",
            eventDescription: "",
            threatLevel: "",
            info: []
          },
          isAdditionalInfoFormDisplayed: false,
          additionalFacts: factList,
          redirectToAdditionalInfo: true
        });
      });
  };
  render() {
    if (this.state.redirectToAdditionalInfo) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Additional Info!</h1>
        <img src={this.state.additionalFacts.infoImg} alt="Big Bang" />
        <h1>{this.state.additionalFacts.randomFacts}</h1>
        <h1>{this.state.additionalFacts.nextMajorEvent}</h1>
        <h1>{this.state.additionalFacts.eventDescription}</h1>
        <h1>{this.state.additionalFacts.threatLevel}</h1>
        <button
          className="btn btn-primary "
          onClick={this.displayAdditionalInfoForm}
        >
          Display Add Event Form
        </button>
        <div>
          <section className="clean-block clean-form dark">
            <div className="container">
              {this.state.isAdditionalInfoFormDisplayed ? (
                <form onSubmit={this.createANewFact}>
                  <div className="form-group">
                    <label htmlFor="infoImg">Fact Image</label>
                    <input
                      className="form-control"
                      id="infoImg"
                      type="text"
                      name="infoImg"
                      onChange={this.handleFormChange}
                      value={this.state.newFacts.infoImg}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="randomFacts">Event Name</label>
                    <input
                      className="form-control"
                      id="randomFacts"
                      type="text"
                      name="randomFacts"
                      onChange={this.handleFormChange}
                      value={this.state.newFacts.randomFacts}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nextMajorEvent">Event Description</label>
                    <textarea
                      className="form-control"
                      id="nextMajorEvent"
                      type="text"
                      name="nextMajorEvent"
                      onChange={this.handleFormChange}
                      value={this.state.newFacts.nextMajorEvent}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="eventDescription">Event Threat</label>
                    <input
                      className="form-control"
                      id="eventDescription"
                      type="text"
                      name="eventDescription"
                      onChange={this.handleFormChange}
                      value={this.state.newFacts.eventDescription}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="threatLevel">Event Location</label>
                    <input
                      className="form-control"
                      id="threatLevel"
                      type="text"
                      name="threatLevel"
                      onChange={this.handleFormChange}
                      value={this.state.newFacts.threatLevel}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      value="submit"
                    >
                      Add New Fact
                    </button>
                  </div>
                </form>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AdditionalInfo;
