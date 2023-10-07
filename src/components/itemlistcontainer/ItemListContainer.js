import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemlist/ItemList';
import { getProductsByCategory, getProducts } from '../../services/firebase/firebaseService';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        if (categoryID) {
          const response = await getProductsByCategory(categoryID);
          console.log('Fetched products by category:', response);
          setProducts(response);
        } else {
          const response = await getProducts();
          console.log('Fetched all products:', response);
          setProducts(response);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [categoryID]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList categoryID={categoryID} />
    </div>
  );
}

export default ItemListContainer;
