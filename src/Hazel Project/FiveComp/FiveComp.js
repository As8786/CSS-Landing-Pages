import React from "react";
import "./five.css";

class Five extends React.Component {
  render() {
    return (
      <div className="five-container">
        <div className="light-gradiant" />
        <h1> AGENCY ACHIEVEMENTS </h1>

        <div className="five-section">
          <div className="five-section-part">
            <i class="far fa-clock" />
            <p className="five-section-part-p-number"> 1250 </p>
            <p className="five-section-part-p-description"> Hours of Work </p>
          </div>

          <div className="five-section-part">
            <i class="fas fa-paper-plane" />
            <p className="five-section-part-p-number"> 340 </p>
            <p className="five-section-part-p-description"> FINISHED WORKS </p>
          </div>

          <div className="five-section-part">
            <i class="fas fa-users" />
            <p className="five-section-part-p-number"> 95 </p>
            <p className="five-section-part-p-description"> CLIENTS </p>
          </div>

          <div className="five-section-part">
            <i class="fas fa-football-ball" />
            <p className="five-section-part-p-number"> 11250 </p>
            <p className="five-section-part-p-description">SOCIAL FOLLOWERS</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Five;
