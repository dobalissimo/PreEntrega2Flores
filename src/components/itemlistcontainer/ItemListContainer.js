import React from 'react';
import {useState, useEffect } from 'react';
import { getProductsByCategory  } from '../../asyncMock'
import ItemList from '../itemlist/ItemList';

import {useParams} from 'react-router-dom'

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([])

  const { categoryID } = useParams();

  useEffect(() => {
    getProductsByCategory(categoryID)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryID]);
  

  
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
}

export default ItemListContainer;
