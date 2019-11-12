import React from "react";
import { Container } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./footer.css";

export const Footer = props => {
  return (
    <div className="footer-container">
      <Container>
        <footer>
          <div className="footer-signature">® bebe 2019</div>
          <div className="contact-data">
            Contact us 24/7
            <FontAwesomeIcon className="contact-icon" icon="envelope" />
            <FontAwesomeIcon className="contact-icon" icon="phone" />
          </div>
        </footer>
      </Container>
    </div>
  );
};