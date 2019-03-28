import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AdditionalInfoListDummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToAdditionalInfoIndex: false,
      individualInfo: {}
    };
  }

  componentDidMount = () => {
    console.log("HEY!!!");
    this.getSingleFact();
  };

  //   getSingleFact = () => {
  //     axios
  //       .get(
  //         `/api/events/${this.props.match.params.id}/info/${
  //           this.props.match.params.infoId
  //         }`
  //       )
  //       .then(response => {
  //         console.log(response.data);
  //         this.setState({
  //           individualInfo: response.data
  //         });
  //       });
  //   };

  getSingleFact = () => {
    axios
      .get(
        `/api/events/${this.props.match.params.id}/info/${
          this.props.match.params.infoId
        }`
      )
      .then(response => {
        console.log(response);
        this.setState({
          individualInfo: response.data
        });
      })
      .catch(err => {
        console.log("You didn't get the individual Id!", err);
      });
  };

  deleteAnInfo = () => {
    axios
      .delete(
        `/api/events/${this.props.match.params.id}/info/${
          this.props.match.params.infoId
        }`
      )
      .then(response => {
        this.setState({ redirectToAdditionalInfoIndex: true });
      });
  };
  render() {
    if (this.state.redirectToAdditionalInfoIndex) {
      return <Redirect to={`/events/${this.props.match.params.id}/info`} />;
    }
    return (
      <div>
        <h1 className="container">
          Changed your mind about this note / fact? No probem, just delete it
          below.
        </h1>

        <div
          className=" justify-content-center container"
          style={{ width: "90rem" }}
        >
          <div className="row align-items-center large-card-style">
            <div className="col-md-6">
              <img
                alt=""
                className="img-fluid rounded"
                src={this.state.individualInfo.infoImg}
              />
            </div>
            <div className="col-md-6 category-design text-white">
              <div>
                <p>
                  <strong>Random Fact: </strong>
                  {this.state.individualInfo.randomFacts}
                </p>
              </div>
              <div>
                <p>
                  <strong>Next Major Event: </strong>
                  {this.state.individualInfo.nextMajorEvent}
                </p>
              </div>
              <div className="getting-started-info">
                <p>
                  <strong>Event Description: </strong>
                  {this.state.individualInfo.eventDescription}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={this.deleteAnInfo}
            className="btn btn-outline-danger main button-margin-all"
          >
            Delete This Fact
          </button>
        </div>
      </div>
    );
  }
}

export default AdditionalInfoListDummy;
