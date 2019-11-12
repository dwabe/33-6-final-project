import React from 'react';
import { Button, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const reactStringReplace = require('react-string-replace');

const Product = (props) => {
	return(
		<div className="product-container col-12">	
				{
					props.product.sale ? 
					<div className="sale-marker">
						<h4>Sale</h4>
					</div>	
					: null
				}
			<div className="product-image-wrapper">				
				<Link to={'/product/' + props.product.id} className="center-align">	
					<img className="product-photo" title={props.product.name} src={props.product.image} alt="album cover"/>
				</Link>
			</div>
			<div className="product-title-wrapper">
				<Link className="product-link" to={'/product/' + props.product.id}>	
					<h2 className="product-title">{props.product.title}</h2>
				</Link>
				<h4 className="product-authors">{reactStringReplace(JSON.stringify(props.product.artist), /(["{}[\]])/g, (match, i) =>(""))}</h4>
				<h4 className="product-genre">{reactStringReplace(JSON.stringify(props.product.genre), /(["{}[\]])/g, (match, i) =>(""))}</h4>
				{
					props.product.type === "CD" ? <h4 className="product-type">CD</h4> : <h4 className="product-type">LP</h4>
				}
				{
					props.product.amount > 0 ? <h4 className="product-amount">Available: <span className="product-available">In warehouse</span></h4> 
					: 
					<h4 className="product-amount">Available: <span className="product-unavailable">None</span></h4>
				}
			</div>
				{
					props.product.sale ? 
					<div className="product-price-wrapper">
						<h3 className="product-price">{props.product.price} zł 	</h3>
						<h3 className="product-oldPrice">{props.product.oldPrice} zł</h3>	
					</div>
					:
					<h3 className="product-price">{props.product.price} zł</h3>
				}
			<Row className="center-justify productList-actions">
				<Button className="btn-add" onClick={() => props.addToCart(props.product)}><FontAwesomeIcon icon="shopping-cart" /> ({(props.cartItem && props.cartItem.quantity) || 0})</Button >
				{
					props.cartItem ? <Button color="danger" className="btn-remove" onClick={() => props.removeFromCart(props.cartItem)}>Remove</Button >	: null
				}		
			</Row>
		</div>
	)
};

export default Product;