import React from 'react';

const ProductDescription = props => {
  return (
    <div className="col-lg-7 col-md-6">
      <div className="product-details-text">
        <h3>{props.name}</h3>

        <h4>&#8358;{props.price}</h4>
        <p>{props.desc}</p>
        <h5>
          <i className="fa fa-check" />150 in stock
        </h5>
        <form action="#" method="post">
          <div className="add-cart-product">
            <input type="number" placeholder="1" />
            <button type="button">+ Add to cart</button>
          </div>
          <div className="add-product-container">
            <button type="button">
              <i className="ion-android-favorite-outline" />Add to Wishlist
            </button>
            <button type="button">
              <i className="icon ion-android-options" />Add to Compare
            </button>
          </div>

          <div className="product-share">
            <span className="p-d-title">Share this product</span>
            <ul className="p-social-links">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDescription;
