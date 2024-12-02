// src/App.jsx
import './main.css'; // Importa el archivo CSS aquí
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <div id="home" style={homeStyle}>
                <h1 style={headerStyle}>Bienvenido a Haut Indumentaria</h1>
            </div>
            <ItemListContainer message="Nuestros productos" />
        </>
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

export default App;