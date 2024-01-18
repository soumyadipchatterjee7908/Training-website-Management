import React from "react";
import "./CourseCard.css";
const CourseCard = () => {
  return (
    <div id="card">
      <div id="cardleft-image">
        <img
          src="https://nstiwkolkata.dgt.gov.in/sites/default/files/inline-images/pot2.jpg"
          alt=""
        />
      </div>
      <div id="cardright">
        <h2 id="cardright-title">MERN STACK DEVELOPMENT</h2>
        <div id="cardright-description">
          <p>
            NSI has been providing fully integrated Software Training &
            Placement Services to the fresh technical graduates of West Bengal
            since 2005. EjobIndia is widely regarded as the No.1 Fresher
            Placement Center in Kolkata, with a track record of around 400
            Fresher Placement. NSI has been providing fully integrated Software
            Training & Placement Services to the fresh technical graduates of
            West Bengal since 2005. EjobIndia is widely regarded as the No.1
            Fresher Placement Center in Kolkata, with a track record of around
            400 Fresher Placement.
          </p>
        </div>
        <div id="cardright-bottom">
          <div className="card-bottom-divs">Amount: 25000 RS ONLY</div>
          <div className="card-bottom-divs">Duration : 3 MONTHS</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
