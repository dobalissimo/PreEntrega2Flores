import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id); 
  };

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <button onClick={handleRemoveItem}>Quitar</button>
    </div>
  );
};

export default CartItem;
