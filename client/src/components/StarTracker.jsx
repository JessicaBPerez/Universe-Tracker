import React, { Component } from "react";
import axios from "axios";

class StarTracker extends Component {
  constructor() {
    super();
    this.state = {
      astronomy: []
    };
  }

  //   componentDidMount = () => {
  //       axios.get(``)
  //   }

  render() {
    return (
      <div>
        <h1 className="glitch button-margin-all font-style">
          Star StarTracker
        </h1>
      </div>
    );
  }
}

export default StarTracker;
