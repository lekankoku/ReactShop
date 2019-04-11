import React, { Component } from 'react';
import _ from 'lodash';
import Naira from './naira';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCartItem } from '../actions/cartActions';
import { logout } from '../actions/authActions';
class Header extends Component {
  onDelete(_id, cart) {
    const cartCopy = cart;
    const indexTodelete = cartCopy.findIndex(function(cart) {
      return cart._id === _id;
    });
    let updCart = [
      ...cartCopy.slice(0, indexTodelete),
      ...cartCopy.slice(indexTodelete + 1)
    ];

    this.props.deleteCartItem(updCart);
  }

  renderCartItems() {
    let cart = this.props.cart;
    if (cart.length > 0) {
      return _.map(cart, ({ _id, name, price, quantity, picture }) => {
        return (
          <div key={name} className="single-cart-item d-flex">
            <div className="cart-img">
              <Link to="/cart">
                <img src={picture} alt="" />
              </Link>
            </div>
            <div className="cart-text-btn">
              <div className="cart-text">
                <h5>
                  <Link to="/cart">{name}</Link>
                </h5>
                <span className="cart-qty">Qty:{quantity}</span>
                <span className="cart-price">
                  <Naira>{price}</Naira>
                </span>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  renderCartPrice() {
    if (this.props.cart.length > 0) {
      return (
        <div>
          <div className="cart-item-wrapper">
            {this.renderCartItems()}

            <div className="cart-price-total d-flex justify-content-between">
              <span>Subtotal:</span>
              <span>
                <Naira>{this.props.totalAmount}</Naira>
              </span>
            </div>
            <div className="cart-links">
              <Link to="/cart">View cart</Link>
              <Link to="/checkout">Checkout</Link>
            </div>
          </div>
        </div>
      );
    }
  }
  renderAccount() {
    switch (this.props.auth.auth) {
      case false:
        return (
          <div>
            <h4>Sign-in or Create a new account today!</h4>
            <ul>
              <li>
                <Link to="/cart">Your Cart</Link>
              </li>

              <li>
                <Link to="/auth/login">Login</Link>
              </li>
              <li>
                <Link to="/auth/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        );
      default:
        return (
          <div>
            <h4>My Account</h4>
            <ul>
              <li>
                <Link to="/profile/orders">Your Orders</Link>
              </li>
              <li>
                <Link to="/profile/wishlist">Your Wishlist</Link>
              </li>

              <li>
                <Link to="/cart">Your Cart</Link>
              </li>
            </ul>

            <h4>Settings</h4>
            <ul>
              <li>
                <Link to="/profile/password">Change Password</Link>
              </li>
              <li>
                <Link to="/profile/address">Billing Address</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={event => {
                    event.preventDefault();
                    this.props.logout();
                    console.log(this.props.auth);
                  }}
                >
                  Signout
                </a>
              </li>
            </ul>
          </div>
        );
    }
  }

  render() {
    return (
      <header className="header-area">
        <div className="mainmenu-area fixed">
          <div className="full-container">
            <div className="row">
              <div className="col-xl-5 col-lg-5 display-none-md display-none-xs">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-5">
                <div className="logo text-center">
                  <Link to="/">
                    <img src="/assets/img/logo/logo.png" alt="NEGO" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-7">
                <div className="header-content d-flex justify-content-end">
                  <div className="cart-wrapper">
                    <a style={{ color: 'red' }}>
                      <i className="icon ion-ios-cart" />
                      <span>{this.props.cart.length}</span>
                    </a>
                    {this.renderCartPrice()}
                  </div>
                  <div className="settings-wrapper">
                    <a href="#">
                      <i className="ion-person" />
                    </a>
                    <div className="settings-content">
                      {this.renderAccount()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu-area">
          <div className="mobile-menu container">
            <nav id="mobile-menu-active">
              <ul className="menu-overflow">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    auth: state.auth
  };
}

export default connect(mapStateToProps, { deleteCartItem, logout })(Header);
