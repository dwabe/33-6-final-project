import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = props => {
  return (
    <div className="header-container">
      <nav>
        <div className="main-title">bebe music shop</div>
        <div className="links-container">
          <NavLink exact to="/" activeClassName="active">
            Main
          </NavLink>
          <NavLink exact to="/user" activeClassName="active">
            User
          </NavLink>
          <NavLink exact to="/cart" activeClassName="active">
            Cart
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
