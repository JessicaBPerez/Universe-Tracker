import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   singleEvent: this.props.match.infoId,
      singleEvent: this.props.match.params.id,

      info: {},
      event: {},
      additionalInfo: {
        infoImg: "",
        randomFacts: "",
        nextMajorEvent: "",
        eventDescription: "",
        threatLevel: "",
        info: []
      },
      isAddMoreInfoFormDisplayed: false,
      redirectToHome: false
    };
  }

  componentDidMount = () => {
    console.log("HEY!!!");
    this.getSingleEvent();
  };

  getSingleEvent = () => {
    axios
      .get(`/api/events/${this.props.match.params.id}`)
      .then(response => {
        console.log(response.data);

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

  //   componentDidMount() {
  //     console.log("infoId: ", this.props.match.params.infoId);
  //     console.log("Hey, you're getting each event!");
  //     this.getIndividualEvent();
  //   }

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
  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>This is where your individual info will go.</h1>
        <h2>This is where you info will go. Look below for reference.</h2>
        {/* {this.state.info.eventDescription}
        {info} */}
        <button onClick={this.deleteAnEvent}>Delete</button>

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
              src={this.state.event.eventImg}
              alt={this.state.event.eventName}
            />
            <div className="card-body">
              <p>Category Threat: {this.state.event.eventCategoryThreat}</p>
              <p>Event Location: {this.state.event.eventLocation}</p>
              <p>Event Description: {this.state.event.eventDescription}</p>
              <button
                onClick={() => this.deleteAnEvent}
                type="button"
                class="close"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Info;
