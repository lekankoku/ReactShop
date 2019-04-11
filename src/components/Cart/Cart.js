import React, { Component } from 'react';
import Naira from '../naira';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Banner from '../Banner';
import { connect } from 'react-redux';

class Cart extends Component {
  renderCartItems() {
    return _.map(this.props.cart, ({ _id, name, quantity, price, picture }) => {
      console.log(_id);

      return (
        <CartItem
          _id={_id}
          quantity={quantity}
          name={name}
          price={price}
          picture={picture}
        />
      );
    });
  }
  render() {
    if (this.props.cart.length > 0) {
      return (
        <div>
          <Banner picture="/assets/img/slider/2.jpg" PageName="Your Cart" />
          <div className="cart-area table-area pt-110 pb-110">
            <div className="container">
              <div className="table-responsive">
                <table className="table product-table text-center">
                  <thead>
                    <tr>
                      <th className="table-remove">remove</th>
                      <th className="table-image">image</th>
                      <th className="table-p-name">product</th>
                      <th className="table-p-price">price</th>
                      <th className="table-p-qty">quantity</th>
                      <th className="table-total">total</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartItems()}</tbody>
                </table>
              </div>
            </div>
            <div className="container">
              <div className="table-total-wrapper d-flex justify-content-end pt-60">
                <div className="table-total-content">
                  <h2>Cart totals</h2>
                  <div className="table-total-amount">
                    <div className="single-total-content d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span className="c-total-price">
                        <Naira>{this.props.totalAmount}</Naira>
                      </span>
                    </div>
                    <div className="single-total-content d-flex justify-content-between">
                      <span>Shipping</span>
                      <span className="c-total-price">
                        <span>Flat Rate:</span> $5.00
                      </span>
                    </div>
                    <div className="single-total-content d-flex justify-content-end">
                      <a href="#">Calculate shipping</a>
                    </div>
                    <div className="single-total-content d-flex justify-content-between">
                      <span>Total</span>
                      <span className="c-total-price">
                        {' '}
                        <Naira>{this.props.totalAmount}</Naira>
                      </span>
                    </div>
                    <Link to="/checkout">Proceed to checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Banner picture="/assets/img/slider/2.jpg" PageName="Your Cart" />
          <div className="cart-area table-area pt-110 pb-110">
            <div className="container text-center">
              <h2>Your Cart is Empty </h2>
            </div>
          </div>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQuantity: state.cart.totalQuantity
  };
}
export default connect(mapStateToProps)(Cart);
