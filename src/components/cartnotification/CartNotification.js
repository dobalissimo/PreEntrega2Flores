import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

function CartNotification() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cart-notification">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="quantity">{totalQuantity}</span>
    </div>
  );
}

export default CartNotification;