import React, { Component } from "react";
import axios from "axios";

class AdditionalInfo extends Component {
  state = {
    additionalFacts: [],
    facts: {
      infoImg: "",
      randomFacts: "",
      nextMajorEvent: "",
      eventDescription: "",
      threatLevel: "",
      info: []
    }
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
  render() {
    return (
      <div>
        <h1>Additional Info!</h1>
        <img src={this.state.additionalFacts.infoImg} alt="Big Bang" />
        <h1>{this.state.additionalFacts.randomFacts}</h1>
        <h1>{this.state.additionalFacts.nextMajorEvent}</h1>
        <h1>{this.state.additionalFacts.eventDescription}</h1>
        <h1>{this.state.additionalFacts.threatLevel}</h1>
      </div>
    );
  }
}

export default AdditionalInfo;
