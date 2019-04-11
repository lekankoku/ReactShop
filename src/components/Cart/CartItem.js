import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Naira from '../naira';
import { connect } from 'react-redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';
import { updateStock } from '../../actions/productActions';
import { addSnackbar } from '../../actions/snackbarActions';
import snackbarMessages from '../utils/snackbarMessages';
class CartItem extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
  }
  onDelete() {
    const _id = this.props._id;
    const cartCopy = this.props.cart;

    const indexTodelete = cartCopy.findIndex(function(cart) {
      return cart._id === _id;
    });
    const removed = cartCopy[indexTodelete].quantity;
    let cart = [
      ...cartCopy.slice(0, indexTodelete),
      ...cartCopy.slice(indexTodelete + 1)
    ];

    this.props.deleteCartItem(cart);
  }
  onIncrement() {
    const _id = this.props._id;

    this.props.updateCart(_id, 1);
  }
  onDecrement() {
    const _id = this.props._id;

    this.props.updateCart(_id, -1);
    if (this.props.quantity == 0) {
      this.onDelete();
    }
  }
  render() {
    const { _id, picture, name, price, quantity, addSnackbar } = this.props;
    return (
      <tr>
        <td className="table-remove">
          <button
            onClick={event => {
              event.preventDefault();
              this.onDelete();
              addSnackbar(snackbarMessages.cart[1]);
            }}
          >
            <i className="fa fa-close" />
          </button>
        </td>
        <td className="table-image">
          <Link to={`/shop/${_id}`}>
            <img src={picture} alt="" />
          </Link>
        </td>
        <td className="table-p-name">
          <Link to={`/shop/${_id}`}>{name}</Link>
        </td>
        <td className="table-p-price">
          <Naira>{price}</Naira>
        </td>
        <td className="table-p-qty">
          <button onClick={this.onIncrement}>+</button>
          <p>{quantity}</p>
          <button onClick={this.onDecrement}>-</button>
        </td>
        <td className="table-total">
          <p>
            <Naira>{price * quantity}</Naira>
          </p>
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart.cart, products: state.products.products };
}
export default connect(mapStateToProps, {
  deleteCartItem,
  updateCart,
  addSnackbar
})(CartItem);
