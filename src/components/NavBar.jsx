// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <h2>Haut Indumentaria</h2>
            <ul style={navListStyle}>
                <li>Home</li>
                <li>Shop</li>
                <li></li>
            </ul>
            <CartWidget />
        </nav>
);
};


const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#282c34',
    color: 'white',
    width: '100%', // Ocupa todo el ancho de la pantalla
    boxSizing: 'border-box', // Incluye el padding en las dimensiones
};

const navListStyle = {
    display: 'flex',
    justifyContent: 'space-around', // Espacio equitativo entre los ítems
    alignItems: 'center',
    listStyleType: 'none',
    width: '40%', // Ajusta el ancho de la lista de navegación para controlar el espacio
    padding: 0,
    margin: 0,
};

export default NavBar;
