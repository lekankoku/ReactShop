import React, { Component } from 'react';
import { addToCart, updateCart } from '../../../actions/cartActions';
import { connect } from 'react-redux';
import Naira from '../../naira';
class ProductDescription extends Component {
  handleCart() {
    const product = [
      ...this.props.cart,
      {
        _id: this.props._id,
        name: this.props.name,
        price: this.props.price,
        picture: this.props.picture,
        quantity: 1
      }
    ];

    if (this.props.cart.length > 0) {
      console.log(this.props._id);
      let _id = this.props._id;
      let cartIndex = this.props.cart.findIndex(function(cart) {
        return cart._id === _id;
      });

      if (cartIndex === -1) {
        if (this.props.stock > 0) {
          this.props.addToCart(product);
        }
      } else {
        if (this.props.stock > 0) {
        }
        this.props.updateCart(this.props._id, 1);
      }
    } else {
      if (this.props.stock > 0) {
        this.props.addToCart(product);
      }
    }
  }
  render() {
    const { _id, name, price, description } = this.props;
    console.log({ _id });
    return (
      <div className="col-lg-7 col-md-6">
        <div className="product-details-text">
          <h3>{name}</h3>

          <h4>&#8358;{price}</h4>
          <p>{description}</p>
          <h5>
            <i className="fa fa-check" />150 in stock
          </h5>
          <form action="#" method="post">
            <div className="add-cart-product">
              <button type="button" onClick={this.handleCart.bind(this)}>
                + Add to cart
              </button>
            </div>
            <div className="add-product-container">
              <button type="button">
                <i className="ion-android-favorite-outline" />Add to Wishlist
              </button>
              <button type="button">
                <i className="icon ion-android-options" />Add to Compare
              </button>
            </div>

            <div className="product-share">
              <span className="p-d-title">Share this product</span>
              <ul className="p-social-links">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { cart: state.cart.cart };
}
export default connect(mapStateToProps, { addToCart, updateCart })(
  ProductDescription
);
