import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function sumItems(cartState) {
  return cartState.reduce((prev, current) => {
    return prev + current.quantity;
  }, 0)
}

export default class  Header extends React.Component {
  render() {
    const itemsInCart = this.props.cart;
    return (
      <div className="header-wrapper">
        <div className="header-container">
          <Container className="nav-container">
            <Navbar color="dark" dark expand="md">
              <NavbarBrand className="navbar-brand" href="/">bebe music shop</NavbarBrand>
              <Nav className="ml-auto nav-main" navbar>
                <NavItem>
                  <NavLink exact to="/cart" className="nav-link" activeClassName="active"><FontAwesomeIcon icon="shopping-cart" /> Cart ({sumItems(itemsInCart) || 0})</NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Container>
        </div>
      </div>
    );
  };
}