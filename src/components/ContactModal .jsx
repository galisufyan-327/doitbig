import React, { useState } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

const ContactModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={() => handleClose()}
        className="modal-contact modal-width theme-bg-d"
      >
        <Modal.Header>
          <button className="cross-btn" onClick={handleClose}>
            <FaTimes className="icon" />
          </button>
        </Modal.Header>
        <div className="modal-body d-flex align-items-center justify-content-center text-center theme-bg-d">
          <div className="quote-form-wrapper text-center">
            <h3>Get a Free Quote</h3>
            <form
              method="POST"
              className="quote-form text-center row"
              action="#"
            >
              <div className="col-lg-6">
                <input type="text" name="fname" placeholder="Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" name="email" placeholder="Email" />
              </div>

              <div className="col-lg-6">
                <input type="text" name="phone" placeholder="Phone" />
              </div>
              <div className="col-lg-6">
                <input type="text" name="website" placeholder="Website" />
              </div>
              <div className="col-lg-12">
                <textarea placeholder="Message" name="message"></textarea>
                <button
                  type="button"
                  className="custom-btn secondary-btn w-100"
                  onClick={() => console.log("clicked")}
                >
                  GET A QUOTE
                </button>
                <div className="social-icons-wrapper d-flex justify-content-center">
                  <p>Follow us:</p>
                  <ul className="social-icons">
                    <li>
                      <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://twitter.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://youtube.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://plus.google.com/discover"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ContactModal;
