// src/App.jsx
import './main.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <div className="fullscreen-background" style={{ backgroundImage: 'url("https://i.pinimg.com/736x/c6/65/11/c665118e7d537a788ad08891a6074883.jpg")' }}>
                            </div>
                            <div id="home" style={homeStyle}>
                                <h1 style={headerStyle}>Bienvenido a Haut Indumentaria</h1>
                            </div>
                            <div id="shopSection" style={shopStyle}>
                                <ItemListContainer message="Nuestros productos" />
                            </div>
                        </div>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

const homeStyle = {
    height: '170vh',
    backgroundImage: 'url("https://i.pinimg.com/736x/c6/65/11/c665118e7d537a788ad08891a6074883.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
};

const headerStyle = {
    fontSize: '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px 20px',
    borderRadius: '10px',
};

const shopStyle = {
    minHeight: '100vh', // Asegura al menos una ventana de altura
    padding: '50px 20px',
    marginTop: '0', // Garantiza que no haya espacio intermedio
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    color: '#333',
};


export default App;