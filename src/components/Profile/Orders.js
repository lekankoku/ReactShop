import React, { Component } from 'react';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import Naira from '../naira';
import Authentication from '../HOCs/_requireAuth';
class Orders extends Component {
  render() {
    return (
      <div>
        <Banner PageName="Your Orders" picture="/assets/img/slider/3.jpg" />
        <div className="wishlist-area table-area pt-110 pb-110">
          <div className="container">
            <div className="table-responsive">
              <table className="table product-table text-center">
                <thead>
                  <tr>
                    <th className="table-remove">remove</th>
                    <th className="table-image">image</th>
                    <th className="table-p-name">Product Name</th>
                    <th className="table-p-price">Order Status</th>
                    <th className="table-stock">Order Date</th>
                    <th className="table-add-cart">Delivery Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-remove">
                      <button>
                        <i className="fa fa-close" />
                      </button>
                    </td>
                    <td className="table-image">
                      <a href="/product-details.html">
                        <img src="/assets/img/cart/2.jpg" alt="" />
                      </a>
                    </td>
                    <td className="table-p-name">
                      <a href="/product-details.html">Habitasse dictumst</a>
                    </td>
                    <td className="table-p-price">
                      <span>In Transit</span>
                    </td>
                    <td className="table-stock">
                      <span>16 days ago</span>
                    </td>
                    <td className="table-add-cart">
                      <span>20/10/2018</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-remove">
                      <button>
                        <i className="fa fa-close" />
                      </button>
                    </td>
                    <td className="table-image">
                      <a href="/product-details.html">
                        <img src="/assets/img/cart/1.jpg" alt="" />
                      </a>
                    </td>
                    <td className="table-p-name">
                      <a href="/product-details.html">Kaoreet lobortis</a>
                    </td>
                    <td className="table-p-price">
                      <span>In Transit</span>
                    </td>
                    <td className="table-stock">
                      <span>16 days ago</span>
                    </td>
                    <td className="table-add-cart">
                      <span>20/10/2018</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Authentication(Orders);
