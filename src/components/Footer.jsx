import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <h1>Contact Us</h1>
            <h4>Address</h4>
            <p>Euclideslaan 60, Utrecht 3584BN Utrecht, Nederland</p>
          </div>

          <div className="col-md-4 text-md-center">
            <ul className="social-icons">
              <li>
                <a
                  href="http://www.facebook.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="http://twitter.com/" target="_blank" rel="noopener">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="http://youtube.com/" target="_blank" rel="noopener">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://plus.google.com/discover"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-md-left">
            <h4>Contact</h4>
            <p>info@doitbig.nl</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
