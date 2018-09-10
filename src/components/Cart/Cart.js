import React, { Component } from 'react';
import CartItem from './CartItem';
import Banner from '../Banner';
class Cart extends Component {
  render() {
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
                <tbody>
                  <CartItem
                    picture="/assets/img/cart/2.jpg"
                    name="Demo Sweater"
                    price={500}
                  />
                  <CartItem
                    picture="/assets/img/cart/1.jpg"
                    name="Demo Trouser"
                    price={400}
                  />
                </tbody>
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
                    <span className="c-total-price">$160.00</span>
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
                    <span className="c-total-price">$165.00</span>
                  </div>
                  <a href="/checkout">Proceed to checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
