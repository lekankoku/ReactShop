import React from 'react';
import { Link } from 'react-router-dom';
const ListItem = props => {
  return (
    <div class="single-product-item">
      <div class="product-image">
        <Link to="/shop/product">
          <img src={props.image} alt="" />
        </Link>
      </div>
      <div class="product-text">
        <h4 style={{ color: '#fb0606' }}>
          <Link to="/shop/product">{props.name}</Link>
        </h4>
        <div class="rating">
          <a href="#" class="yellow">
            <i class="ion-ios-star" />
          </a>
          <a href="#" class="yellow">
            <i class="ion-ios-star" />
          </a>
          <a href="#" class="yellow">
            <i class="ion-ios-star" />
          </a>
          <a href="#" class="yellow">
            <i class="ion-ios-star" />
          </a>
          <a href="#">
            <i class="ion-ios-star" />
          </a>
        </div>
        <h5>
          <i class="fa fa-check" /> Still in stock
        </h5>
        <div class="pro-price">
          <h5 style={{ color: '#fb0606' }}>&#8358;{props.price}</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere
          metus vitae arcu imperdiet, id aliquet ante scelerisque. Sed sit amet
          sem vitae urna fringilla tempus.
        </p>
        <div class="all-btn-wrap">
          <a data-toggle="tooltip" title="Add to cart">
            + Add to cart
          </a>
          <ul class="product-hover">
            <li>
              <a
                data-toggle="tooltip"
                data-placement="left"
                title="Add to Wishlist"
              >
                <i class="ion-android-favorite-outline" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
