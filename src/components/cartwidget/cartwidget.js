import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      {totalQuantity > 0 ? (
        <Link to="/cart" className="cart-link">
          <span className="cart-notification">
              Ver {totalQuantity === 1 ? 'el producto' : `los ${totalQuantity} productos`}
          </span>
        </Link>
      ) : (
        <span className="cart-notification">0</span>
      )}
    </div>
  );
}

export default CartWidget;
