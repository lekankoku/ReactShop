import React from 'react';
import { Link } from 'react-router-dom';
const Product = props => {
  return (
    <div className="owl-item" style={{ width: '375px' }}>
      <div className="custom-col">
        <div className="single-product-item">
          <div className="product-image">
            <Link to="/product">
              <img src={props.picture} alt="" />
            </Link>
            <ul className="product-hover">
              <li>
                <a
                  href="wishlist.html"
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Add to Wishlist"
                >
                  <i className="ion-android-favorite-outline" />
                </a>
              </li>

              <li
                className="btn-quickview modal-view"
                data-toggle="modal"
                data-target="#productModal"
              >
                <span
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Quick View"
                >
                  <i className="icon ion-android-open" />
                </span>
              </li>
            </ul>
          </div>
          <div className="product-text">
            <h5>
              <Link to="/product">{props.name}</Link>
            </h5>
            <div className="pro-price">
              <span>&#8358;{props.price}</span>
            </div>
            <div className="cart-btn-wrap">
              <a data-toggle="tooltip" data-placement="top" title="Add to cart">
                + Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
