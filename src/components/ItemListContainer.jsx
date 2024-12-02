// src/components/ItemListContainer.jsx
import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ message }) => {
    const items = [
        { id: 1, name: 'Remera Básica', description: 'Cómoda y ligera.', image: 'https://deliver.com.ar/cdn/shop/collections/Portada_Coleccion_Remera_Boxy_Fit.jpg?v=1723820409' },
        { id: 2, name: 'Jeans Clásicos', description: 'Perfectos para cualquier ocasión.', image: 'https://shop.diesel.com/on/demandware.static/-/Sites-diesel-master-catalog/default/dw1c97dd8f/images/large/A06925_09I29_01_F.jpg' },
        { id: 3, name: 'Chaqueta de Cuero', description: 'Estilo y elegancia.', image: 'https://http2.mlstatic.com/D_NQ_NP_704153-MLA75612908917_042024-O.webp' },
        { id: 4, name: 'Zapatillas Urbanas', description: 'Ideales para el día a día.', image: 'https://http2.mlstatic.com/D_NQ_NP_620663-MLA77742576168_072024-O.webp' },
        { id: 5, name: 'Vestido de Verano', description: 'Fresco y colorido.', image: 'https://m.media-amazon.com/images/I/41W4h1DRCtL._AC_.jpg' },
        { id: 6, name: 'Gorra Casual', description: 'Protección con estilo.', image: 'https://cdnx.jumpseller.com/mgm-importaciones/image/49548942/Mesa_de_trabajo_15jmps.jpg?1717794014' },
        { id: 7, name: 'Camisa Formal', description: 'Para eventos importantes.', image: 'https://www.camiseriaeuropea.com/cdn/shop/files/Blanca008_001.jpg?v=1682536174&width=360' },
        { id: 8, name: 'Top Mujer', description: 'Juvenil y a la moda.', image: 'https://img.ltwebstatic.com/images3_pi/2024/07/25/59/17218766164b0875af8de6e208b693225b8c936505_thumbnail_405x552.jpg' },
    ];

    return (
        <section id="shopSection" style={containerStyle}>
            <h3>{message}</h3>
            <ItemList items={items} />
        </section>
    );
};

const containerStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '20px auto',
    width: '90%', // Ajusta el ancho para que ocupe más espacio
};



export default ItemListContainer;
