import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex((prod) => prod.id === item.id);

    if (itemIndex === -1) {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    }

    setTotalQuantity((prevTotal) => prevTotal + quantity);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((prod) => prod.id !== itemId);
    setCart(updatedCart);

    const removedItem = cart.find((prod) => prod.id === itemId);
    if (removedItem) {
      setTotalQuantity((prevTotal) => prevTotal - removedItem.quantity);
    }
  };

  const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
