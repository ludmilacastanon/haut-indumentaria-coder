// src/components/NavBar.jsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    const navigate = useNavigate(); // Para redirigir a la página principal
    const location = useLocation(); // Para verificar la ruta actual

    const scrollToShop = () => {
        if (location.pathname === '/') {
            // Si estás en la página principal, desplaza hacia "Shop"
            const section = document.getElementById('shopSection');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Si estás en otra página, redirige a la página principal y luego desplaza
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('shopSection');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Retraso para asegurar que la página principal cargue
        }
    };

    const scrollToTop = () => {
        // Desplazar hacia arriba suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav style={navStyle}>
            <h2>Haut Indumentaria</h2>
            <ul style={navListStyle}>
                <li>
                    <Link to="/" onClick={scrollToTop} style={linkStyle}>
                        Home
                    </Link>
                </li>
                <li>
                    <button
                        onClick={scrollToShop}
                        style={{
                            ...linkStyle,
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        Shop
                    </button>
                </li>
                <li>
                    <Link to="/about" style={linkStyle}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={linkStyle}>
                        Contact
                    </Link>
                </li>
            </ul>
            <CartWidget />
        </nav>
    );
}

const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
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