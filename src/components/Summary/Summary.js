import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

require('./summary.css');

function sort (items) {
    return items.sort((a, b) => a.id - b.id)
  };

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalPrice: 0,
      cartProducts: this.props.cart,
      productsAmount: this.props.cart.length,
      checkoutData: this.props.checkout[0]
    };
    
    this.summFinalPrice = this.summFinalPrice.bind(this);
  }

  componentDidMount() {	
    this.setState({
      cartProducts: this.props.cart,
    })
    this.summFinalPrice();
  }

  summFinalPrice(){
    let partialPrice = 0;
    this.setState(state => {
      if(this.props.cart.length > 0) {
        for(let i = 0; i < this.props.cart.length; i++) {
          partialPrice += this.props.cart[i].price * this.props.cart[i].quantity
        }
        partialPrice = Math.round(partialPrice * 100) / 100;
      }
      return {finalPrice: partialPrice}
    })
    return {finalPrice: partialPrice}
  }

  render() {
      const  {finalPrice, checkoutData} = this.state;
    return (
      <Container className="summary-container">
      {
        this.state.productsAmount > 0 ? 
      <Col>
        <h3 className="checkout-header center-align">Summary</h3>
          <Table responsive>
            <thead>
              <tr>
                <th colSpan="9" className="center-align">Your order</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3">Title</td>
                <td colSpan="3">Artist</td>
                <td colSpan="1">Quantity</td>
                <td colSpan="2">Price</td>
              </tr>
            {
              sort(this.props.cart).map(cartItem => 
              <tr key={cartItem.id}>
                <td colSpan="3">{ cartItem.title }</td>
                <td colSpan="3">{cartItem.artist }</td>
                <td colSpan="1">{ cartItem.quantity }</td>
                <td colSpan="2">{ cartItem.price } zł</td>
              </tr>)
            }
              </tbody>
              <thead>
                <tr>
                  <th colSpan="9" className="center-align">Address</th>
                </tr>                  
              </thead>
              <tbody>
              <tr>
                <td colSpan="1">Name</td>
                <td colSpan="1">Last name</td>
                <td colSpan="2">E-mail</td>
                <td colSpan="2">Street</td>
                <td colSpan="1">Number</td>
                <td colSpan="1">City</td>
                <td colSpan="1">Postal code</td>
              </tr>
              <tr>
                <td colSpan="1">{ checkoutData.firstName }</td>
                <td colSpan="1">{ checkoutData.lastName }</td>
                <td colSpan="2">{ checkoutData.emailInput }</td>
                <td colSpan="2">{ checkoutData.streetInput }</td>
                <td colSpan="1">{ checkoutData.flatNum }</td>
                <td colSpan="1">{ checkoutData.cityName }</td>
                <td colSpan="1">{ checkoutData.postalCode }</td>
              </tr>
              <tr>
                <th>Sum:</th>
                <th colSpan="9"> {finalPrice} zł</th>
              </tr>
              <tr>
                <th colSpan="9" className="center-align">Thank you! Come back soon!</th>
              </tr>
            </tbody>
          </Table>
        </Col>        
        : 
        <Row>
          <Col className="center-align middle-posiiton">
            <h3 className="emptyCart-title"></h3>
            <Link to='/' >
              <h3 className="emptyCart-link-text"></h3>
            </Link>
          </Col>
        </Row>
        }
      </Container>
    )
  }
}

const mapStateToProps = function(store) {
	return {
		cart: store.cart,
		checkout: store.checkout,
	};
};

export default connect(mapStateToProps)(Summary);