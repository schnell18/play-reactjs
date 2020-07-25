import React from 'react';
import './App.css';
import Product from './components/Product';
import productData from './products';

function App() {

  return (
    <div className="App">
      { productData.map(item => <Product key={item.id} product={item} />) }
    </div>
  );
}

export default App;
