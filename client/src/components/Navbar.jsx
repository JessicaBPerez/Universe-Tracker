import React, { Component } from "react";
import { Link } from "react-router-dom";

//Whole Navbar Styling goes here

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark navbar-expand-lg fixed-top navbarstyle"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand brand-properties" href="/">
              Universe Tracker
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              type="button"
              data-toogle="collapse"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="nav navbar-nav ml-auto text-uppercase">
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/">
                    Facts
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <Link to={`/weather`} className="nav-link js-scroll-trigger">
                    Weather
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link to={`/tracker`} className="nav-link js-scroll-trigger">
                    Mars Rover Tracker
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    to={`/nasadaily`}
                    className="nav-link js-scroll-trigger"
                  >
                    Nasa Daily
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
