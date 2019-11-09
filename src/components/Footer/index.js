import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export const Footer = props => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-signature">® bebe 2019</div>
        <div className="links-container">
          <NavLink exact to="/" activeClassName="active">
          </NavLink>
          <NavLink exact to="/main" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/user" activeClassName="active">
            User
          </NavLink>
          <NavLink exact to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </div>
      </footer>
    </div>
  );
};