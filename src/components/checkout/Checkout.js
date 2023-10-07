import React, { useState, useContext } from 'react';
import { db } from '../../services/firebase/firebaseConfig'; // Import the 'db' object
import { CartContext } from '../../context/CartContext'; // Import your CartContext
import CheckoutForm from '../checkoutform/CheckoutForm';
import { Timestamp, writeBatch, collection, getDocs, query, where, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
  
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
  
      console.log('Order Object:', objOrder); // Log the order object
  
      const batch = writeBatch(db);
  
      const outOfStock = [];
  
      const ids = cart.map((prod) => prod.id);
  
      const productsRef = collection(db, 'items');
  
      console.log('Product IDs:', ids); // Log the product IDs
  
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where('id', 'in', ids))
      );
  
      console.log('Products Added from Firestore:', productsAddedFromFirestore); // Log the products added
  
      const { docs } = productsAddedFromFirestore;
  
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock; // Adjust this based on your product structure

const productAddedToCart = cart.find((prod) => prod.id === doc.id);
const prodQuantity = productAddedToCart?.quantity;
  
        console.log('Product Data:', dataDoc); // Log the product data
        console.log('Stock in DB:', stockDb); // Log the stock in the database
        console.log('Product Added to Cart:', productAddedToCart); // Log the product added to the cart
        console.log('Product Quantity:', prodQuantity); // Log the product quantity
  
        if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
      });
  
      console.log('Out of Stock Products:', outOfStock); // Log the out-of-stock products
  
      if (outOfStock.length === 0) {
        await batch.commit();
  
        const orderRef = collection(db, 'orders');
  
        console.log('Adding Order to Firestore:', objOrder); // Log the order being added
  
        const orderAdded = await addDoc(orderRef, objOrder);
  
        console.log('Order Added:', orderAdded); // Log the order ID
  
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('Hay productos que están fuera de stock');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
