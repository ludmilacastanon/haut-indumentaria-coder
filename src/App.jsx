// src/App.jsx
import './main.css'; // Importa el archivo CSS aquí
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Bienvenido a nuestra tienda!" />
    </div>
  );
}
const appStyle = {
  minHeight: '100vh', // Que ocupe toda la altura
  width: '100%', // Ocupa todo el ancho de la pantalla
  padding: '0', // Sin padding externo
  margin: '0', // Sin márgenes externos
  backgroundColor: '#f5f5f5', // Color de fondo
};

export default App;
