import React, { Component } from 'react';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
class Accordion extends Component {
  componentDidMount() {
    jquery('#showlogin').on('click', function() {
      jquery('#checkout-login').slideToggle(500);
    });
  }
  render() {
    return (
      <div className="coupon-area pt-110">
        <div className="container">
          <div className="coupon-accordion">
            <h3>
              Returning customer?{' '}
              <span id="showlogin">Click here to login</span>
            </h3>
            <div id="checkout-login" className="coupon-content">
              <div className="coupon-info">
                <p className="coupon-text">
                  If you have shopped with us before, please enter your details
                  in the boxes below. If you are a new customer please proceed
                  to the Billing & Shipping section.
                </p>
                <form action="#">
                  <p className="form-row-first">
                    <label>
                      Username or email <span className="required">*</span>
                    </label>
                    <input type="text" />
                  </p>
                  <p className="form-row-last">
                    <label>
                      Password <span className="required">*</span>
                    </label>
                    <input type="text" />
                  </p>
                  <p className="form-row">
                    <input type="submit" value="Login" />
                    <label>
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </p>
                  <p className="lost-password">
                    <a href="#">Lost your password?</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
