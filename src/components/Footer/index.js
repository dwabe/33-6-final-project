import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./footer.css";

export const Footer = props => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-signature">® bebe 2019</div>
        <div className="contact">
          Contact us 24/7
          <FontAwesomeIcon className="contact-icon" icon="envelope" />
          <FontAwesomeIcon className="contact-icon" icon="phone" />
        </div>
      </footer>
    </div>
  );
};