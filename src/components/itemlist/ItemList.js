import React, { useEffect, useState } from 'react';
import Item from '../item/Item';
import { getProducts, getProductsByCategory } from '../../services/firebase/firebaseService';

const ItemList = ({ categoryID }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (categoryID) {
          response = await getProductsByCategory(categoryID);
        } else {
          response = await getProducts();
        }

        setItems(response);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchData();
  }, [categoryID]);

  return (
    <div className='ListGroup'>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
