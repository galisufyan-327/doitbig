import React, { useState } from "react";
import ContactModal from "./ContactModal ";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <section className="location section-gap light-grey-bg">
      <div className="container">
        <h2 className="section-title text-center">Our Location</h2>

        <div
          className="tab-content location-tab-content grid-wrapper"
          id="myTabContent"
        >
          <div className="tab-pane fade show active" id="location-tab-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.3811183886146!2d5.1507914!3d52.0909951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c668ba95a4e6c7%3A0x1f84f85c7f7c5a17!2sEuclideslaan%2060%2C%203584%20BN%20Utrecht%2C%20Netherlands!5e0!3m2!1sen!2s!4v1679474081834!5m2!1sen!2s"
              width="600"
              height="450"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="contact-info">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6">
              <div className="info">
                <h5>Address</h5>
                <p>
                  Euclideslaan 60, Utrecht 3584BN <br />
                  Utrecht, Nederland
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="info">
                <h5>Email</h5>
                <a href="mailto:info@doitbig.nl">info@doitbig.nl</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>
            <div className="col-md-6 col-lg-2 text-lg-right info">
              <a
                onClick={() => setShow(true)}
                className="custom-btn secondary-btn"
                data-bs-toggle="modal"
                data-bs-target="#quote-modal"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <ContactModal show={show} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default Contact;
