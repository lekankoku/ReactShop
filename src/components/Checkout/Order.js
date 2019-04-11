import React, { Component } from 'react';

import Banner from '../Banner';
import Accordion from './Accordion';
import BillingDetails from './BillingDetails';
import { connect } from 'react-redux';
import { readCart } from '../../actions/cartActions';
import Naira from '../naira';

const CartItem = props => {
  return (
    <tr className="cart_item">
      <td className="product-name">
        {props.name}{' '}
        <strong className="product-quantity"> × {props.quantity}</strong>
      </td>
      <td className="product-total">
        <span className="amount">
          <Naira>{props.price}</Naira>
        </span>
      </td>
    </tr>
  );
};
class Order extends Component {
  componentDidMount() {
    const { readCart } = this.props;
  }
  render() {
    const { cart, totalAmount } = this.props;
    return (
      <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="your-order">
          <h3>Your order</h3>
          <div className="your-order-table table-responsive">
            <table>
              <thead>
                <tr>
                  <th className="product-name">Product</th>
                  <th className="product-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(({ _id, name, price, quantity }) => {
                  return (
                    <CartItem
                      key={_id}
                      name={name}
                      price={price}
                      quantity={quantity}
                    />
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="cart-subtotal">
                  <th>Cart Subtotal</th>
                  <td>
                    <span className="amount">$215.00</span>
                  </td>
                </tr>
                <tr className="shipping">
                  <th>Shipping</th>
                  <td>
                    <ul>
                      <li>
                        <label>
                          Flat Rate: <span className="amount">$7.00</span>
                        </label>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr className="order-total">
                  <th>Order Total</th>
                  <td>
                    <strong>
                      <span className="amount">
                        <Naira>{totalAmount}</Naira>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="payment-method">
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel">
                <div className="panel-heading" id="headingOne">
                  <a
                    href="#checkout"
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    Cheque Payment
                  </a>
                </div>
                <div id="checkout" className="collapse show">
                  <div className="panel-body">
                    <p>
                      Please send your cheque to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading" id="headingTwo">
                  <a
                    className="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#billing"
                  >
                    PayPal Payment
                    <img src="/assets/img/payment-paypa.png" alt="" />
                  </a>
                </div>
                <div id="billing" className="collapse">
                  <div className="panel-body">
                    <p>
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-button-payment">
              <input type="submit" value="Place order" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  };
}
export default connect(mapStateToProps, null)(Order);
