import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../cartitem/CartItem';
import { Link } from 'react-router-dom';
import '../cart/Cart.css'

const Cart = () => {
  const { cart, clearCart, totalQuantity } = useContext(CartContext);

  const totalCartCost = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(item => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <h3>Total: ${totalCartCost}</h3>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to='/checkout' className='Button'>Checkout</Link>
      <Link to='/' className='Button'>Continuar comprando</Link>
    </div>
  );
}

export default Cart;
