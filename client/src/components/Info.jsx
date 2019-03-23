import React, { Component } from "react";
import axios from "axios";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   singleEvent: this.props.match.infoId,
      singleEvent: this.props.match.params.id,

      info: {},
      additionalInfo: {
        infoImg: "",
        randomFacts: "",
        nextMajorEvent: "",
        eventDescription: "",
        threatLevel: "",
        info: []
      },
      isAddMoreInfoFormDisplayed: false
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

  //   getIndividualEvent = () => {
  //     axios.get(`api/events/${this.props.match.params.id}`).then(response => {
  //       console.log("This is the response data:", response.data);
  //       this.setState({
  //         info: response.data
  //       });
  //     });
  //       .catch(err => {
  //         console.log("Go back, goof!", err);
  //       });
  //   };

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
    return (
      <div>
        <h1>This is where your individual info will go.</h1>
        <h2>This is where you info will go. Look below for reference.</h2>
        {this.state.info.eventDescription}
      </div>
    );
  }
}

export default Info;
