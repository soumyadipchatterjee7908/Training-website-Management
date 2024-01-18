import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div id="card">
      <div id="cardleft-image">
        <img
          src="https://nstiwkolkata.dgt.gov.in/sites/default/files/inline-images/pot2.jpg"
          alt=""
        />
      </div>
      <div id="cardright">
        <h2 id="cardright-title">COURSE NAME</h2>
        <div id="cardright-description">
          EjobIndia has been providing fully integrated Software Training &
          Placement Services to the fresh technical graduates of West Bengal
          since 2005. EjobIndia is widely regarded as the No.1 Fresher Placement
          Center in Kolkata, with a track record of around 400 Fresher Placemen
        </div>
        <div id="cardright-bottom">
          <div className="card-bottom-divs">Amount</div>
          <div className="card-bottom-divs">Duration</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
