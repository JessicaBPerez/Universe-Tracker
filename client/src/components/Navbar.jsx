import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              alt=""
            />
          </a>
          <a className="nav-item nav-link active" href="">
            Home <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="">
            Features
          </a>
          <a className="nav-item nav-link" href="">
            Pricing
          </a>
          <a className="nav-item nav-link" href="" tabindex="-1">
            Disabled
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
