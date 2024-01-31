// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la petición GET al API de productos
    axios.get('URL_DEL_API_DE_PRODUCTOS')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
