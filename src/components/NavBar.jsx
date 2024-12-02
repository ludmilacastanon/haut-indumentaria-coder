// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    const scrollToShop = () => {
        const section = document.getElementById('shopSection');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={navStyle}>
            <h2>Haut Indumentaria</h2>
            <ul style={navListStyle}>
                <li><a href="#home" style={linkStyle}>Home</a></li>
                <li><button onClick={scrollToShop} style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer' }}>Shop</button></li>
                <li><a href="#about" style={linkStyle}>About</a></li>
                <li><a href="#contact" style={linkStyle}>Contact</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
}

const navStyle = {
    position: 'fixed', // Mantener la NavBar fija
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000, // Asegurar que esté sobre todo el contenido
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#282c34',
    color: 'white',
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

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
};

export default NavBar;