import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addToCart, updateCart } from "../../../actions/cartActions";
import { addSnackbar } from "../../../actions/snackbarActions";
import Naira from "../../naira";
import snackbarMessages from "../../utils/snackbarMessages";
import { connect } from "react-redux";
class Product extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      productsPerPage: 1
    };

    this.handleCart = this.handleCart.bind(this);
  }
  handleCart() {
    const product = [
      ...this.props.cart,
      {
        _id: this.props._id,
        name: this.props.name,
        price: this.props.price,
        picture: this.props.picture,
        quantity: 1
      }
    ];

    if (this.props.cart.length > 0) {
      console.log(this.props._id);
      let _id = this.props._id;
      let cartIndex = this.props.cart.findIndex(function(cart) {
        return cart._id === _id;
      });

      if (cartIndex === -1) {
        if (this.props.stock > 0) {
          this.props.addToCart(product);
        }
      } else {
        if (this.props.stock > 0) {
        }
        this.props.updateCart(this.props._id, 1);
      }
    } else {
      if (this.props.stock > 0) {
        this.props.addToCart(product);
      }
    }
  }
  render() {
    const { _id, name, picture, price, addSnackbar, auth } = this.props;
    //alert(snackbarMessages.cart[0]);

    return (
      <div className="owl-item" style={{ width: "375px" }}>
        <div className="custom-col">
          <div className="single-product-item">
            <div className="product-image">
              <Link to={`/shop/${_id}`}>
                <img src={picture} alt="" />
              </Link>
              {auth ? (
                <ul className="product-hover">
                  <li>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Add to Wishlist"
                      onClick={event => {
                        event.preventDefault();

                        addSnackbar(snackbarMessages.auth[0]);
                      }}
                    >
                      <i className="ion-android-favorite-outline" />
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className="product-text">
              <h5 style={{ color: "#ef1c29" }}>
                <Link to={`/shop/${_id}`}>{name}</Link>
              </h5>
              <div className="pro-price">
                <span style={{ color: "#ef1c29" }}>
                  <Naira>{price}</Naira>
                </span>
              </div>
              <div className="cart-btn-wrap">
                <button
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to cart"
                  style={{ color: "#ffff", backgroundColor: "#ef1c29" }}
                  onClick={event => {
                    event.preventDefault();
                    this.handleCart();
                    addSnackbar(snackbarMessages.cart[0]);
                  }}
                >
                  + Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { cart: state.cart.cart, auth: state.auth.auth };
}
export default connect(
  mapStateToProps,
  { addToCart, updateCart, addSnackbar }
)(Product);
