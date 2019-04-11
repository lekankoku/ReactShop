import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <div className="ht-tab-content">
        <div className="shop-items">
          <span>Showing 1–9 of 53 results</span>
        </div>
        <div className="shop-results">
          <span>Sort By :</span>
          <div className="shop-select">
            <select name="number" id="number">
              <option value="position">Default sorting</option>
              <option value="p-name">Sort By Popularity</option>
              <option value="p-price">Sort By Price</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Sort;
