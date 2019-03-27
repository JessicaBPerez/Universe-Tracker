import React, { Component } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

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
            <a className="navbar-brand brand-properties" href="#page-top">
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
                  <a className="nav-link js-scroll-trigger" href="/">
                    Additional Info
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/weather">
                    Weather
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/tracker">
                    Tracker
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link js-scroll-trigger" href="/">
                    Thank You
                  </a>
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
