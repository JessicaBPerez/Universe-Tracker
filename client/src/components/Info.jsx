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

  // editAnEvent = () => {
  //   axios.put(``)
  // }

  // componentDidMount() {
  //   console.log("infoId: ", this.props.match.params.infoId);
  //   console.log("Hey, you're getting each event!");
  //   this.getIndividualEvent();
  // }

  // getIndividualEvent = () => {
  //   axios
  //     .get(
  //       `/api/events/${this.props.match.params.id}/info/${
  //         this.props.match.params.infoId
  //       }`
  //     )
  //     .then(response => {
  //       console.log(response.data);

  //       this.setState({
  //         info: response.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log("Go back, goof!", err);
  //     });
  // };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div>
          <h1>This is where your individual info will go.</h1>
          <h1>This is where your individual info will go.</h1>
          <h1>This is where your individual info will go.</h1>
        </div>
        <h1>This is where you info will go. Look below for reference.</h1>
        {/* {this.state.info.eventDescription}
        {info} */}
        <button onClick={this.deleteAnEvent}>Delete</button>
        {/* <div>{this.state.info.additionalInfo}</div> */}
        <div style={{ width: "90rem" }}>
          <div className="row align-items-center product-info">
            <div className="col-md-6">
              <img
                className="img-thumbnail figure-img img-fluid rounded"
                src={this.state.info.eventImg}
              />
            </div>
            <div className="col-md-6 category-design">
              <h3>{this.state.info.eventName}</h3>
              <div className="getting-started-info">
                <p>{this.state.info.eventDescription}</p>
              </div>
              <a className="btn btn-primary main" href="/">
                Add More Flair
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
