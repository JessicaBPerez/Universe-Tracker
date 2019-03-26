import React, { Component } from "react";

function AdditionalInfoListDummy(props) {
  return (
    <div>
      <h1>Hey girl, hey!</h1>

      {props.infoImg}
      <section
        className=" card-margin card-style"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row"
        }}
      >
        <div className="card" style={{ width: "30rem" }}>
          <img className="card-img-top" src={props.infoImg} alt="" />
          <div className="card-body">
            <p className="link-name">
              {/* <Link to={pathname}>{event.eventName}</Link> */}
            </p>
            <p>
              <strong>Random Fact: </strong>
              {props.randomFacts}
            </p>
            <p>
              <strong>Next Major Event: </strong>
              {props.nextMajorEvent}
            </p>
            <p>
              <strong>Event Description: </strong>
              {props.eventDescription}
            </p>
            <p>
              <strong>Threat Level: </strong>
              {props.threatLevel}
            </p>
            {/* <Link onClick={() => this.state.deleteAnEvent}>
                    DeleteMe!
                  </Link> */}
            <button
              // onSubmit={() => this.state.deleteAnEvent}
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

export default AdditionalInfoListDummy;
