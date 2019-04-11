import React, { Component } from 'react';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import Naira from '../naira';
import Authentication from '../HOCs/_requireAuth';
class Wishlist extends Component {
  render() {
    return (
      <div>
        <Banner PageName="Your Wishlist" picture="/assets/img/slider/3.jpg" />
        <div className="wishlist-area table-area pt-110 pb-110">
          <div className="container">
            <div className="table-responsive">
              <table className="table product-table text-center">
                <thead>
                  <tr>
                    <th className="table-remove">remove</th>
                    <th className="table-image">image</th>
                    <th className="table-p-name">Product Name</th>
                    <th className="table-p-price">Unit Price</th>
                    <th className="table-stock">Stock Status</th>
                    <th className="table-add-cart">Add To cart</th>
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
                      <Naira>600</Naira>
                    </td>
                    <td className="table-stock">
                      <span>In Stock</span>
                    </td>
                    <td className="table-add-cart">
                      <a href="/cart.html">Add to cart</a>
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
                      <Naira>500</Naira>
                    </td>
                    <td className="table-stock">
                      <span>In Stock</span>
                    </td>
                    <td className="table-add-cart">
                      <a href="/cart.html">Add to cart</a>
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

export default Authentication(Wishlist);
