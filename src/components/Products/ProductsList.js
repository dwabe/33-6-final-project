import React from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      productPerPage: 20
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index) {
    event.preventDefault();
    this.setState({
      currentPage: index
    });
  }
  render () {
    const { currentPage, productPerPage } = this.state;
    const rowSize = 4;
    const currentProducts = this.props.products.slice( currentPage * productPerPage,(currentPage + 1) * productPerPage);
    const productsLayout = currentProducts
      .map((product, i) => (
          <Col  xs="12" sm="6" md="6" lg="3" className="center-justify flex-display" xl="3" key={product.id}>
            <Product
                product={product} 
                addToCart={this.props.addToCart}
                removeFromCart={this.props.removeFromCart}
                cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
            >
            </Product>
          </Col>
        )
      )
      .reduce((rows, col, index) => {
        let currentRow
        if (index % rowSize === 0) {
          currentRow = [];
          rows.push(currentRow)
        } else {
          currentRow = rows[rows.length - 1]
        }
        currentRow.push(col)
        return rows;
        }, []
      )
      .map((cols, i) => <Row className="product-row center-justify" key={`row-${i}`}>{cols}</Row>)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.products.length / productPerPage); i++) {
      pageNumbers.push(i);
    }
    
    const pagesCount = pageNumbers.length;
    return (       
        <Container className="product-list-wrapper">
          {productsLayout}                 
          <Pagination size='sm' className="product-pagination center-justify">               
            <PaginationItem className="p-item" disabled={currentPage <= 0}>
              <PaginationLink className='p-link'
                onClick={e => this.handleClick(e, currentPage - 1)}
                previous
                href="#"
              />
            </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => 
            <PaginationItem className="p-item" active={i === currentPage} key={i}>
              <PaginationLink className='p-link' onClick={e => this.handleClick(e, i)} href="#">
              {i + 1}
              </PaginationLink>
            </PaginationItem>
            )}
            <PaginationItem className="p-item" disabled={currentPage >= pagesCount - 1}>
              <PaginationLink className='p-link'
                onClick={e => this.handleClick(e, currentPage + 1)}
                next
                href="#"
              />  
            </PaginationItem>
          </Pagination>
        </Container>
      )
    }
  }

  export default ProductList;