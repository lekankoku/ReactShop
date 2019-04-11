import React, { Component } from 'react';

import Banner from '../Banner';
import Accordion from './Accordion';
import BillingDetails from './BillingDetails';
import Order from './Order';
class Checkout extends Component {
  render() {
    return (
      <div>
        <Banner picture="/assets/img/slider/2.jpg" PageName="Checkout" />
        <Accordion />
        <div class="checkout-area pb-110">
          <div class="container">
            <form action="#">
              <div class="row">
                <BillingDetails />
                <Order />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
