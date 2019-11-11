import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_PRODUCT } from '../../actions/actionsProducts';
import { Container, Row, Button } from 'reactstrap';

require('./products.css');

class ProductDetails extends Component {
	constructor(props) {
      super(props);
      this.state = { 
        product: {}
		};
	}

	componentDidMount() {
        this.props.getProduct(this.props.match.params.id);
	}

	render() {
      const { image, title, artist, type, genre, amount, issueYear, sale, price, oldPrice} = this.props.selectedProduct;
      const cartItem = this.props.cart.find(cartItem => cartItem.id === this.props.selectedProduct.id)
		return (
      <Container className="productDetails-wrapper">
        <Row className="center-justify productDetails-row">
          <div className="col-sm-12 col-md-4 col-lg-4 product-image-container">
            <div className="photo-wrapper">
              <img className="product-photo" src={image} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 product-details-container">
            <h3 className="product-details-title">{title}</h3>
            <h3 className="product-details-artist">{artist}</h3>
            <div className="product-moreDetails">
              <h4 className="moreDetails-header">Details</h4>
              <div className="product-moreDetails-container">
                <h5 className="moreDetails-item">type: {type}</h5>
                <h5 className="moreDetails-item">genre: {genre}</h5>
                <h5 className="moreDetails-item">year of issue: {issueYear}</h5>
              </div>
              <h4 className="moreDetails-header">More</h4>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 product-purchase-wrapper">
            <div className="product-purchase-container">
              {
                sale ? 
                <div className="prodDetails-sale-marker">
                  <h4>Sale</h4>
                </div>	
                : null
              }  
              {
                sale ? 
                <div className="product-price-wrapper">
                  <h3 className="productDetails-price">{price} zł</h3> 
                  <h3 className="productDetails-Oldprice">{oldPrice} zł</h3>	
                </div>
                :
                <div className="product-price-wrapper">
                  <h3 className="productDetails-price">{price} zł</h3>	
                </div>
              }
              <h4 className="productDetails-amount">availability: {amount} pcs</h4>                     
              <Row className="center-justify productList-actions">
                <Button className="btn-add" size="lg" block onClick={() => this.props.addToCart(this.props.selectedProduct)}>Add to cart ({(cartItem && cartItem.quantity) || 0})</Button >
                {
                  cartItem ? <Button color="danger" className="btn-remove" size="lg" onClick={() => this.props.removeFromCart(cartItem)}>Remove</Button >	: null
                }
              </Row>
            </div>
          </div>
        </Row>
      </Container>
		)
	}
}

const mapStateToProps = function(store) {
	return {
    selectedProduct: store.productsReducer.selectedProduct,
    cart: store.cart,
    products: store.productsReducer,
	};
};

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => {
    dispatch({type: 'ADD_ITEM', payload: item})
  },
  removeFromCart: (item) => {
    dispatch({type: 'REMOVE_ITEM', payload: item})
  },
  getProduct: (id) => {
    dispatch({type: GET_PRODUCT, payload: id})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);