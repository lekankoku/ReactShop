import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
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
                        <NavLink to="/" activeClassName="active">
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop" activeClassName="active">
                          Shop
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/about" activeClassName="active">
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact" activeClassName="active">
                          Contact Us
                        </NavLink>
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
                      <i className="icon ion-bag" />
                      <span>2</span>
                    </a>
                    <div className="cart-item-wrapper">
                      <div className="single-cart-item d-flex">
                        <div className="cart-img">
                          <a href="/cart">
                            <img src="/assets/img/cart/1.jpg" alt="" />
                          </a>
                        </div>
                        <div className="cart-text-btn">
                          <div className="cart-text">
                            <h5>
                              <a href="/cart">Fashion Wear</a>
                            </h5>
                            <span className="cart-qty">Qty: 1</span>
                            <span className="cart-price">$115.00</span>
                          </div>
                          <button type="button">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                      </div>
                      <div className="single-cart-item d-flex">
                        <div className="cart-img">
                          <a href="/cart">
                            <img src="/assets/img/cart/2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="cart-text-btn">
                          <div className="cart-text">
                            <h5>
                              <a href="/cart">Kaoreet lobortis</a>
                            </h5>
                            <span className="cart-qty">Qty: 1</span>
                            <span className="cart-price">$95.00</span>
                          </div>
                          <button type="button">
                            <i className="fa fa-close" />
                          </button>
                        </div>
                      </div>
                      <div className="cart-price-total d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span> $210.00</span>
                      </div>
                      <div className="cart-links">
                        <a href="/cart">View cart</a>
                        <a href="/checkout">Checkout</a>
                      </div>
                    </div>
                  </div>
                  <div className="settings-wrapper">
                    <a href="#">
                      <i className="ion-grid" />
                    </a>
                    <div className="settings-content">
                      <h4>My Account</h4>
                      <ul>
                        <li>
                          <Link to="/account">My Account</Link>
                        </li>
                        <li>
                          <Link to="/account/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link to="/cart">Shopping Cart</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="/account/login">Login</Link>
                        </li>
                      </ul>
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
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" activeClassName="active">
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
