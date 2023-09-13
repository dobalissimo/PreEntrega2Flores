import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import Contador from './components/contador/Contador';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
  <Route path="/" element={<ItemListContainer />} />
  <Route path="/category/:categoryID" element={<ItemListContainer />} />
  <Route path="/item/:itemId" element={<ItemDetailContainer />} />
  <Route path="*" element={<h1>404 NOT FOUND</h1>} />
</Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
