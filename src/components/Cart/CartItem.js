import React from 'react';
import { Link } from 'react-router-dom';
const CartItem = props => {
  return (
    <tr>
      <td className="table-remove">
        <button>
          <i className="fa fa-close" />
        </button>
      </td>
      <td className="table-image">
        <Link to="/shop/product">
          <img src={props.picture} alt="" />
        </Link>
      </td>
      <td className="table-p-name">
        <Link to="/shop/product">{props.name}</Link>
      </td>
      <td className="table-p-price">
        <p>&#8358;{props.price}</p>
      </td>
      <td className="table-p-qty">
        <input value="1" name="cart-qty" type="number" />
      </td>
      <td className="table-total">
        <p>&#8358;{props.price}</p>
      </td>
    </tr>
  );
};

export default CartItem;
