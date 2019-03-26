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
    // this.getSingleFact();
  };

  getSingleFact = () => {
    axios
      .get(
        `/api/events/${this.props.match.params.id}/info/${
          this.props.match.params.infoId
        }`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          individualInfo: response.data
        });
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
        <h1>Where delete goes.</h1>
        <button
          onClick={this.deleteAnInfo}
          className="btn btn-outline-danger main"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default AdditionalInfoListDummy;
