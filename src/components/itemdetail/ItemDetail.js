import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Contador from '../contador/Contador';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Category: {category}</p>
        <p className="Info">Description: {description}</p>
        <p className="Info">Price: ${price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <ButtonGroup>
            <Button as={Link} to="/cart" className="Option">
              Terminar compra
            </Button>
            <Button as={Link} to="/" className="Option">
              Seguir comprando
            </Button>
          </ButtonGroup>
        ) : (
          <Contador initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
