// src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = ({ message }) => {
    return (
    <section style={containerStyle}>
        <h3>{message}</h3>
      {/* Aquí irían los items */}
    </section>
    );
};

const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Añade sombra para destacar el contenedor
    textAlign: 'center',
    marginTop: '20px',
};
export default ItemListContainer;
