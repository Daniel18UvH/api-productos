// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    // Simular una petición POST al API para agregar un nuevo producto
    // En un entorno real, deberías hacer una solicitud real al API.
    // Además, debes manejar mejor la actualización del estado para evitar mutar el estado directamente.
    const updatedProducts = [...products, { id: products.length + 1, ...newProduct }];
    setProducts(updatedProducts);
    
    // Agregar el nuevo producto a la lista de productos agregados
    setAddedProducts([...addedProducts, { id: addedProducts.length + 1, ...newProduct }]);
  };

  return (
    <div className="App">
      <ProductList products={products} />
      <AddProductForm onAddProduct={handleAddProduct} />

      {/* Sección para mostrar productos agregados */}
      <div>
        <h2>Productos Agregados Recientemente</h2>
        <ul>
          {addedProducts.map(product => (
            <li key={product.id}>{product.name} - {product.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
