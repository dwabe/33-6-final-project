import React from "react";
import { Container } from 'reactstrap';

import "./footer.css";

export const Footer = props => {
  return (
    <div className="footer-container">
      <Container>
        <footer>
          <div className="footer-signature">® bebe 2019</div>
          <div className="contact-data">Our place: </div>
        </footer>
      </Container>
    </div>
  );
};