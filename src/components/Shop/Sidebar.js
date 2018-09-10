import React, { Component } from 'react';
import ListItem from './ListItem';
class Sidebar extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-4">
        <div className="sidebar-widget">
          <h5>Product Categories</h5>
          <ul className="sidebar-widget-list">
            <li>
              <a href="#">
                Accessories <span>(5)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Bedroom <span>(5)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Decor &amp; Furniture <span>(13)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Electronics &amp; Computer <span>(13)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Fashion &amp; clothings <span>(13)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Furniture <span>(4)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Home, Garden &amp; Tools <span>(14)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Laptops &amp; Desktops <span>(7)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Livingroom <span>(4)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Men <span>(4)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Mobiles &amp; Tablets <span>(6)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Sport &amp; Outdoors <span>(7)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Toy, Kids &amp; Baby <span>(7)</span>
              </a>
            </li>
            <li>
              <a href="#">
                Women <span>(4)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-widget">
          <h5>Color</h5>
          <div className="sidebar-widget-option-wrapper">
            <div className="sidebar-widget-option">
              <input type="checkbox" id="black" />
              <label for="black">
                Black <span>(1)</span>
              </label>
            </div>
            <div className="sidebar-widget-option">
              <input type="checkbox" id="blue" />
              <label for="blue">
                Blue <span>(1)</span>
              </label>
            </div>
            <div className="sidebar-widget-option">
              <input type="checkbox" id="gold" />
              <label for="gold">
                Gold <span>(3)</span>
              </label>
            </div>
          </div>
        </div>
        <div className="sidebar-widget">
          <h5>Filter by price</h5>
          <div className="price-slider-container">
            <div id="slider-range" />
            <div className="price_slider_amount">
              <div className="slider-values">
                <span>Price:</span>
                <input
                  type="text"
                  id="amount"
                  name="price"
                  placeholder="Add Your Price"
                />
              </div>
              <button type="button">Filter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
