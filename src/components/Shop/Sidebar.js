import React, { Component } from "react";

import { connect } from "react-redux";
import { getCategories, toggleFilter } from "../../actions/productActions";
class Sidebar extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  onChange(event) {
    alert(event.target.id);
    //this.setState({ [event.target.name]: event.target.id });
  }
  render() {
    const { categories, toggleFilter } = this.props;
    let index = 0;
    if (!categories) {
      return <div>loadin</div>;
    } else {
      return (
        <div className="col-xl-3 col-lg-4">
          <div className="sidebar-widget">
            <h5>Product Categories</h5>
            <ul className="sidebar-widget-list">
              {categories.map(function(category) {
                const filterName = category;

                return (
                  <li>
                    <a
                      href="#"
                      key={index}
                      key={filterName}
                      onClick={event => {
                        event.preventDefault();
                        toggleFilter(filterName);
                      }}
                    >
                      {filterName}
                    </a>
                  </li>
                );
                index++;
              })}
            </ul>
          </div>
          // TODO: build slider
          <div class="sidebar-widget">
            <h5>Filter by price</h5>
            <div class="price-slider-container">
              <div id="slider-range" />
              <div class="price_slider_amount">
                <div class="slider-values">
                  <span>Price:</span>
                  <input
                    type="text"
                    id="amount"
                    name="price"
                    placeholder="Add Your Price"
                    onChange={this.onChange}
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
}

function mapStateToProps(state) {
  console.log(state);
  return { categories: state.products.categories };
}

export default connect(
  mapStateToProps,
  { getCategories, toggleFilter }
)(Sidebar);
