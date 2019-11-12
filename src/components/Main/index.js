import React, { Component } from "react";
import { connect } from 'react-redux';
import ProductsList from "../Products/ProductsList";
import Filter from "../Sidebar/Sidebar";
import { Container } from 'reactstrap';

require('./main.css');

class Main extends Component {
  constructor(props) {
		super(props);

		this.state = { 
			sort: '',
			genre: '',
			artist: '',
			type: '',
			search: '',
			products: [], 
			filteredProducts: []
		};
		this.handleSearchProducts = this.handleSearchProducts.bind(this);
		this.handlePriceSort = this.handlePriceSort.bind(this);
		this.handleArtistSort = this.handleArtistSort.bind(this);
		this.handleGenreFilter = this.handleGenreFilter.bind(this);
		this.handleTypeFilter = this.handleTypeFilter.bind(this);
	}

	componentDidMount() {	
    this.setState({
      products: this.props.products.products,
    })
    this.listProducts();
  }

	listProducts() {
		this.setState(state => {
			if (state.sort === 'lowest') {
				state.products.sort((a, b) => ((a.price > b.price) ? 1 : -1)) ;
			} else if (state.sort === 'highest') {
				state.products.sort((a, b) => ((a.price < b.price) ? 1 : -1)) ;
			} else if (state.sort === 'atoz') {
				state.products.sort((a, b) => ((a.artist > b.artist) ? 1 : -1)) ;
			} else if (state.sort === 'ztoa') {
				state.products.sort((a, b) => ((a.artist < b.artist) ? 1 : -1)) ;
			} else {
				state.products.sort((a, b) => ((a.id > b.id) ? 1 : -1)) ;
			}
			let tempList = state.products;
			if (state.search !== '') {
				tempList = state.products.filter(product =>  product.title.toLowerCase().includes(state.search.toLowerCase()) || product.artist.toLowerCase().includes(state.search.toLowerCase()));
				if (state.genre !== '') {
					tempList = tempList.filter(a => a.genre === state.genre) ;
				}
				if (state.type !== '') {
					tempList = tempList.filter(a => a.type.toLowerCase() === state.type.toLowerCase()) ;
				}
			} else {
				if (state.genre !== '') {
					tempList = state.products.filter(a => a.genre === state.genre) ;
				}
				if (state.type !== '') {
					tempList = state.products.filter(a => a.type.toLowerCase() === state.type.toLowerCase()) ;
				}
			}
			return { filteredProducts: tempList };
		})
	}

	handleSearchProducts(event) {
		this.setState({search: event.target.value});
		this.listProducts();
	}

  handlePriceSort(event) {
		this.setState({sort: event.target.value});
		this.listProducts();
	}

	handleArtistSort(event) {
		this.setState({sort: event.target.value});
		this.listProducts();
	}

	handleGenreFilter(event) {
		this.setState({genre: event.target.value});
		this.listProducts();
	}

	handleTypeFilter(event) {
		this.setState({type: event.target.value});
		this.listProducts();
	}

	render() {
		return(   
			<div className="homepage-container">
				<div className="sidebar">
					<Filter 
						genre={this.state.genre} 
						type={this.state.type} 
						sort={this.state.sort} 
						search={this.state.search} 
						handlePriceSort={this.handlePriceSort}
						handleArtistSort={this.handleArtistSort}
						handleGenreFilter={this.handleGenreFilter} 
						handleTypeFilter={this.handleTypeFilter} 
						handleSearchProducts={this.handleSearchProducts}
					/>
				</div>
				<Container>
					<ProductsList 
						products={this.state.filteredProducts}  
						addToCart={this.props.addToCart}
						removeFromCart={this.props.removeFromCart}
						cart={this.props.cart}
					/>
				</Container>
      </div>
		);
	}
} 

const mapStateToProps = function(store) {
	return {
		records: store.recordsReducer,
		products: store.productsReducer,
		cart: store.cart,
		
	};
};

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => {
		dispatch({type: 'ADD_ITEM', payload: item})
	},
	removeFromCart: (item) => {
		dispatch({type: 'REMOVE_ITEM', payload: item})
	}
});

export default connect(
  mapStateToProps,
	mapDispatchToProps
)(Main);