import burger1img from '../src/img/burger1.jpg';
import burger2img from '../src/img/burger2.jpeg';
import burger3img from '../src/img/burger3.jpeg';
import burger4img from '../src/img/burger4.jpeg';
import burger5img from '../src/img/burger5.jpeg';
import burger6img from '../src/img/burger6.jpeg';
import burger7img from '../src/img/burger7.jpeg';
import burger8img from '../src/img/burger8.jpeg';
import burger9img from '../src/img/burger9.jpeg';
import burger10img from '../src/img/burger10.jpeg';
import burger11img from '../src/img/burger11.jpg';
import burger12img from '../src/img/burger12.jpeg';


const products = [
    {
      id: '1',
      name: 'Bourdeaux Simple + Papas Fritas',
      description: 'Medallon x1 Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo Bourdeaux.',
      price: '+ $2600',
      category: 'simple', 
      img: burger1img,
      stock: 20,
    },
    {
      id: '2',
      name: 'Bourdeaux Doble + Papas Fritas',
      description: 'Medallon x2 Cheddar Fetas x4 Bacon Cebolla Crispy Aderezo Bourdeaux.',
      price: '+ $2900',
      category: 'doble',
      img: burger2img,
      stock: 20,
    },
    {
      id: '3',
      name: 'Sweet Onion Simple + Papas Fritas',
      description: 'Medallon x1 Cheddar Fetas x2 Bacon Cebolla Caramelizada',
      price: '+ $2600',
      category: 'simple', 
      img: burger3img,
      stock: 20,
    },
    {
      id: '4',
      name: 'Sweet Onion Doble + Papas Fritas',
      description: 'Medallon x2 Cheddar Fetas x4 Bacon Cebolla Caramelizada',
      price: '+ $2900',
      category: 'doble',
      img: burger4img,
      stock: 20,
    },
    {
      id: '5',
      name: 'Cheese Burger Simple + Papas Fritas',
      description: 'Medallon x1 Cheddar Feta x2',
      price: '+ $2200',
      category: 'simple',
      img: burger5img,
      stock: 20,
    },
    {
      id: '6',
      name: 'Cheese Burger Doble + Papas Fritas',
      description: 'Medallon x2 Cheddar x4',
      price: '+ $2600',
      category: 'doble',
      img: burger6img,
      stock: 20,
    },
    {
      id: '7',
      name: 'Cheese Burger Triple + Papas Fritas',
      description: 'Medallon x3 Cheddar Fetas x6',
      price: '+ $3100',
      category: 'triple',
      img: burger7img,
      stock: 20,
    },
    {
      id: '8',
      name: 'American Burger Simple + Papas Fritas',
      description: 'Medallon x 1 Cheddar Fetas x2 Tomate Lechuga Cebolla Cruda Dill Pickles Aderezo Thousand Island',
      price: '+ $2500',
      category: 'simple',
      img: burger8img,
      stock: 20,
    },
    {
      id: '9',
      name: 'American Burger Doble + Papas Fritas',
      description: 'Medallon x2 Cheddar Fetas x4 Tomate Lechuga Cebolla Cruda Dill Pickles Aderezo Thousand Island',
      price: '+ $2800',
      category: 'doble',
      img: burger9img,
      stock: 20,
    },
    {
      id: '10',
      name: 'Grilled Onion + Papas Fritas',
      description: 'Medallon x2 Cheddar x4 Cebolla Grilled',
      price: '+ $2600',
      category: 'doble',
      img: burger10img,
      stock: 20,
    },
    {
      id: '11',
      name: 'Royal Simple + Papas Fritas',
      description: 'Medallon x1 Cheddar Fetas x2 Cebolla Cruda Ketchup Mostaza Pepino',
      price: '+ $2300',
      category: 'simple',
      img: burger11img,
      stock: 20,
    },
    {
      id: '12',
      name: 'Royal Doble + Papas Fritas',
      description: 'Medallon x2 Cheddar Fetas x4 Cebolla Cruda Ketchup Mostaza Pepino',
      price: '+ $2600',
      category: 'doble',
      img: burger12img,
      stock: 20,
    },
  ];

  export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
  }

  export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
  }

  export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === productCategory));
      }, 500);
    });
  };
  
  