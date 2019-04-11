import React, { Component } from 'react';
import _ from 'lodash';
import Product from './product';
import OwlCarousel from 'react-owl-carousel';
import { connect } from 'react-redux';
import { getProducts } from '../../../actions/productActions';
require('owl.carousel/dist/assets/owl.carousel.css');
require('owl.carousel/dist/assets/owl.theme.default.css');
const options = {
  responsive: {
    0: {
      items: 1
    },
    420: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
};
class ProductArea extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  renderSlides() {
    return _.map(
      this.props.products,
      ({ _id, name, price, pictures, isFeatured, stock, description }) => {
        if (isFeatured && stock > 0) {
          return (
            <Product
              key={_id}
              _id={_id}
              stock={stock}
              picture={pictures[0]}
              name={name}
              description={description}
              price={price}
            />
          );
        }
      }
    );
  }
  render() {
    return (
      <div className="product-area ptb-110">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Featured Products</h3>
          </div>
        </div>

        <div className="container">
          <div className="custom-row">
            <OwlCarousel
              items={4}
              dotClass={true}
              nav
              navText={[
                '<i className="fa fa-angle-left"></i>',
                '<i className="fa fa-angle-right"></i>'
              ]}
              responsive={options.responsive}
              className="owl-carousel carousel-style-one carousel-style-dot owl-loaded owl-drag"
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: 'translate3d(-1875px, 0px, 0px)',
                    transition: 'all 0s ease 0s',
                    width: '7125px'
                  }}
                >
                  {this.renderSlides()}
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.products.products.length);
  return { products: state.products.products };
}

export default connect(mapStateToProps, { getProducts })(ProductArea);
