import React, { Component } from 'react';
import Banner from '../Banner';
import Sort from './Sort';
import List from './List';
import Sidebar from './Sidebar';
class Shop extends Component {
  render() {
    return (
      <div>
        <Banner PageName="Shop" picture="/assets/img/slider/3.jpg" />
        <div className="shop-area ptb-110">
          <div className="container-medium">
            <div className="ht-product-tab">
              <Sort />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="order-xl-2 order-lg-2 col-xl-9 col-lg-8">
                <div className="ht-product-shop tab-content fix">
                  <List />
                </div>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
