import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

class AdditionalInfoList extends Component {
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

  componentDidMount() {
    this.getAdditionalInfo();
  }

  getAdditionalInfo = () => {
    axios
      .get(`/api/events/${this.props.match.params.id}/info`)
      .then(response => {
        this.setState({
          additionalFacts: response.data
        });
      })
      .catch(err => {
        console.log("You didn't get me!", err);
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
      .post(`/api/events/${this.props.match.params.id}/info`, {
        infoImg: this.state.newFacts.infoImg,
        randomFacts: this.state.newFacts.randomFacts,
        nextMajorEvent: this.state.newFacts.nextMajorEvent,
        eventDescription: this.state.newFacts.eventDescription,
        threatLevel: this.state.newFacts.threatLevel
      })
      .then(response => {
        const factList = [...this.state.additionalFacts];
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
          additionalFacts: factList,
          redirectToAdditionalInfo: true
        });
      })
      .then(() => {
        this.getAdditionalInfo();
      });
  };

  //Toggles the form
  displayAdditionalInfoForm = () => {
    this.setState((state, props) => {
      return {
        isAdditionalInfoFormDisplayed: !state.isAdditionalInfoFormDisplayed
      };
    });
  };

  render() {
    const additionalInfos = this.state.additionalFacts.map(
      (additionalInfo, index) => {
        return (
          <div>
            <div key={index} />
            <section
              className=" card-margin card-style"
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row"
              }}
            >
              <div className="card" style={{ width: "30rem" }}>
                <img
                  className="card-img-top"
                  src={additionalInfo.infoImg}
                  alt=""
                />
                <div className="card-body">
                  <p className="link-name" />
                  <Link
                    to={`/events/${this.props.match.params.id}/info/${
                      additionalInfo._id
                    }`}
                  >
                    <p className="additional-facts">
                      Delete This Fact / Comment
                    </p>
                  </Link>
                  <p>
                    <strong>Random Fact: </strong>
                    {additionalInfo.randomFacts}
                  </p>
                  <p>
                    <strong>Next Major Event: </strong>
                    {additionalInfo.nextMajorEvent}
                  </p>
                  <p>
                    <strong>Event Description: </strong>
                    {additionalInfo.eventDescription}
                  </p>
                  <p>
                    <strong>Threat Level: </strong>
                    {additionalInfo.threatLevel}
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
      }
    );
    return (
      <div>
        <h1 className=" container glitch button-margin-all font-style">
          Want to add your own facts or comments about this topic? Just fill the
          information out below.
        </h1>
        <div class="card-container">{additionalInfos}</div>
        <button
          className="btn btn-light button-margin-all"
          onClick={this.displayAdditionalInfoForm}
        >
          Display Add Fact/Comment Form
        </button>
        <div>
          <section className="clean-block clean-form dark button-margin-all">
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
                    <label htmlFor="nextMajorEvent">
                      Event Description / Comments
                    </label>
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
                      className="btn btn-dark btn-block"
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

export default AdditionalInfoList;
