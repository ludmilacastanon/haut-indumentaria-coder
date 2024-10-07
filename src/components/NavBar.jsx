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
    width: '100%', 
    boxSizing: 'border-box', 
};

const navListStyle = {
    display: 'flex',
    justifyContent: 'space-around', 
    alignItems: 'center',
    listStyleType: 'none',
    width: '40%', 
    padding: 0,
    margin: 0,
};

export default NavBar;
