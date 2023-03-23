import React from "react";

const Services = () => {
  return (
    <section id="services" className="onepage-services light-grey-bg">
      <div className="floating-service-wrapper section-gap">
        <div className="container">
          <h2 className="section-title text-center">What we offer</h2>
          <p className="larger-txt text-center">
            No matter what you're working on, we will make sure that you got
            what you need to grow.
          </p>
          <div className="grid-wrapper">
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-6">
                <div className="service-block text-center">
                  <img src="images/services/UIUX.svg" alt="design" />
                  <h4>UX, UI Designing</h4>
                  <p>
                    Pellentesque eget velit tempus, porta ante eu, consectetur
                    augue nunc mollis tincidunt felis porta ante eu.
                  </p>
                  <div className="service-overlay">
                    <ul className="facilities text-left">
                      <li>Digital Branding</li>
                      <li>User Experience</li>
                      <li>User Interface Design</li>
                      <li>Information Architecture</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <div className="service-block text-center">
                  <img src="images/services/web.svg" alt="design" />
                  <h4>Web Development</h4>
                  <p>
                    Pellentesque eget velit tempus, porta ante eu, consectetur
                    augue nunc mollis tincidunt felis porta ante eu.
                  </p>
                  <div className="service-overlay">
                    <ul className="facilities text-left">
                      <li>Web Development</li>
                      <li>Quality Assurance</li>
                      <li>E-Commerce Solutions</li>
                      <li>Responsive Web Design</li>
                      <li>Web applications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-6">
                <div className="service-block text-center">
                  <img src="images/services/consultancy.svg" alt="design" />
                  <h4>Consultancy</h4>
                  <p>
                    Pellentesque eget velit tempus, porta ante eu, consectetur
                    augue nunc mollis tincidunt felis porta ante eu.
                  </p>
                  <div className="service-overlay">
                    <ul className="facilities text-left">
                      <li>Digitalising processes</li>
                      <li>Moving to cloud</li>
                      <li>Scalable solutions</li>
                      <li>Hire contract professionals</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="service-block text-center">
                  <img src="images/services/mobileapp.svg" alt="design" />

                  <h4>App Development</h4>
                  <p>
                    Pellentesque eget velit tempus, porta ante eu, consectetur
                    augue nunc mollis tincidunt felis porta ante eu.
                  </p>
                  <div className="service-overlay">
                    <ul className="facilities text-left">
                      /<li>Cross platform Apps</li>
                      <li>Android Apps</li>
                      <li>iPhone Apps</li>
                      <li>Marketing & maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="work"></div>
      </div>
    </section>
  );
};

export default Services;
