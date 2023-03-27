import React from "react";

const Process = () => {
  return (
    <section className="onepage-services section-gap light-grey-bg">
      <div className="process-container">
        <h2 className="section-title text-center">Our Process</h2>
        <p className="larger-txt text-center">
          A clear working method for powerful results
        </p>
      </div>
      <div className="center-wrapper">
        <div className="line d-flex justify-content-between">
          <div className="position-relative-dot">
            <div className="line-text">Project Discussion</div>
          </div>
          <div className="position-relative-dot">
            <div className="line-text">Requirements gathering</div>
          </div>
          <div className="position-relative-dot">
            <div className="line-text">Timeline & Cost estimation</div>
          </div>
          <div className="position-relative-dot">
            <div className="line-text">prototype & design</div>
          </div>
          <div className="position-relative-dot">
            <div className="line-text">Development</div>
          </div>
          <div className="position-relative-dot">
            <div className="line-text">User Testing</div>
          </div>
          <div className="position-relative-dot">
            <div className="line-text">Launching</div>
          </div>
        </div>
        <div style={{ margin: "5rem" }}>.</div>
      </div>
    </section>
  );
};

export default Process;
