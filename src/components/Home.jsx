import React from "react";

const Home = () => {
  return (
    <section id="home" className="banner d-flex align-items-center">
      <div className="container">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-5 text-center text-lg-left">
            <h1>
              HELLO,
              <br />
              We build digital products
            </h1>
            <p className="larger-txt">
              Great design and development solutions for your business.
            </p>
            <a href="#contact" className="custom-btn secondary-btn page-scroll">
              Get started
            </a>
          </div>

          <div className="col-lg-7">
            <div className="img-container text-center text-lg-right">
              <img
                src="images/banner/home-banner.svg"
                alt="Onepage home banner image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
