import React, { Component } from "react";
import { Link } from "react-router-dom";
import { addToCart, updateCart } from "../../actions/cartActions";
import { updateStock } from "../../actions/productActions";
import { addSnackbar } from "../../actions/snackbarActions";
import snackbarMessages from "../utils/snackbarMessages";
import { connect } from "react-redux";
class ListItem extends Component {
  constructor(props) {
    super(props);

    this.handleCart = this.handleCart.bind(this);
  }
  handleCart() {
    const product = [
      ...this.props.cart,
      {
        _id: this.props._id,
        name: this.props.name,
        price: this.props.price,
        picture: this.props.image,
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
    const {
      _id,
      image,
      name,
      price,
      description,
      addSnackbar,
      auth
    } = this.props;

    return (
      <div className="single-product-item">
        <div className="product-image">
          <Link to={`/shop/${_id}`}>
            <img src={image} alt="" />
          </Link>
        </div>
        <div className="product-text">
          <h4 style={{ color: "#fb0606" }}>
            <Link to={`/shop/${_id}`}>{name}</Link>
          </h4>

          <div className="pro-price">
            <h5 style={{ color: "#fb0606" }}>&#8358;{price}</h5>
          </div>
          <p>{description}</p>
          <div className="all-btn-wrap">
            <a
              style={{ color: "red" }}
              href="#"
              data-toggle="tooltip"
              title="Add to cart"
              onClick={event => {
                event.preventDefault();
                this.handleCart();
                addSnackbar(snackbarMessages.cart[0]);
              }}
            >
              + Add to cart
            </a>
            {auth ? (
              <ul className="product-hover">
                <li>
                  <a
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to Wishlist"
                    onClick={event => {
                      event.preventDefault();

                      addSnackbar(snackbarMessages.wishlist[0]);
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
  {
    addToCart,
    updateCart,
    addSnackbar
  }
)(ListItem);
