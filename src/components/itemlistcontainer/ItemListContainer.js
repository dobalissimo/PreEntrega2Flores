import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../itemlist/ItemList';
import { getProductsByCategory, getProducts } from '../../services/firebase/firebaseService';

function ItemListContainer({ greeting }) {
  const { categoryID } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response;

        if (categoryID) {
          response = await getProductsByCategory(categoryID);
        } else {
          response = await getProducts();
        }

        console.log(`Fetched ${categoryID ? 'category' : 'all'} products:`, response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, [categoryID]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList categoryID={categoryID} />
    </div>
  );
}

export default ItemListContainer;
