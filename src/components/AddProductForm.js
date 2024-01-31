// src/components/AddProductForm.js
import React, { useState } from 'react';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !price) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Llamar a la función del padre para agregar el nuevo producto
    onAddProduct({ name, price });

    // Limpiar los campos después de agregar el producto
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nuevo Producto</h2>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Precio:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AddProductForm;
