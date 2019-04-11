import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import Pagination from './Pagination';
import ListItem from './ListItem';
class List extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      productsPerPage: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.getFilteredProducts = this.getFilteredProducts.bind(this);
  }

  handleClick(id) {
    this.setState({
      currentPage: Number(id)
    });
  }
  componentDidMount() {
    this.props.getProducts();
  }

  getFilteredProducts(products) {
    let { filters } = this.props;
    let filteredProducts;
    if (filters.length > 0) {
      filteredProducts = products.filter(product =>
        filters.includes(product.category)
      );
    } else {
      filteredProducts = products;
    }

    return filteredProducts;
  }
  render() {
    const { currentPage, productsPerPage } = this.state;
    let { products } = this.props;
    let filteredProducts = this.getFilteredProducts(products);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const renderProducts = _.map(
      currentProducts,
      ({ _id, name, description, price, stock, pictures, category }) => {
        return (
          <ListItem
            key={_id}
            _id={_id}
            stock={stock}
            image={pictures[0]}
            name={name}
            description={description}
            price={price}
          />
        );
      }
    );

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(filteredProducts.length / productsPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          className={currentPage === number ? 'page-item active' : 'page-item'}
        >
          <a
            href="#"
            id={number}
            className="page-link"
            onClick={event => {
              event.preventDefault();
              this.handleClick(event.target.id);
            }}
          >
            {number}
          </a>
        </li>
      );
    });

    return (
      <div id="list" role="tabpanel">
        {renderProducts}
        <div className="pagination-wrapper">
          <nav aria-label="navigation">
            <ul className="pagination">
              <li
                className={
                  currentPage === 1 ? 'page-item disabled' : 'page-item'
                }
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={event => {
                    event.preventDefault();
                    this.handleClick(currentPage - 1);
                  }}
                >
                  Previous
                </a>
              </li>
              {renderPageNumbers}
              <li
                className={
                  currentPage === pageNumbers.length
                    ? 'page-item disabled'
                    : 'page-item'
                }
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={event => {
                    event.preventDefault();
                    this.handleClick(currentPage + 1);
                  }}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { products: state.products.products, filters: state.filters };
}

export default connect(mapStateToProps, { getProducts })(List);
