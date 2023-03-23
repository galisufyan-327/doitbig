import React from "react";

const Achievements = () => {
  return (
    <div className="achievements section-gap theme-bg-d">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="counter-block d-flex align-items-center justify-content-center">
              <div className="icon-container">
                <img
                  src="images/achievements/counter/counter-icon-1.png"
                  alt="Happy clients"
                />
              </div>
              <div className="counter-wrapper">
                <div className="number">
                  <span className="counter">450+</span>
                </div>
                Happy
                <br />
                Clients
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="counter-block d-flex align-items-center justify-content-center">
              <div className="icon-container">
                <img
                  src="images/achievements/counter/counter-icon-2.png"
                  alt="Happy clients"
                />
              </div>
              <div className="counter-wrapper">
                <div className="number">
                  <span className="counter">4510+</span>
                </div>
                Running
                <br />
                Projects
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="counter-block d-flex align-items-center justify-content-center">
              <div className="icon-container">
                <img
                  src="images/achievements/counter/counter-icon-3.png"
                  alt="Happy clients"
                />
              </div>
              <div className="counter-wrapper">
                <div id="services" className="number">
                  <span className="counter">2500+</span>
                </div>
                Project
                <br />
                Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
