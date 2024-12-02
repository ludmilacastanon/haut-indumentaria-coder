import React from 'react';
import Item from './item';

function ItemList({ items }) {
    return (
        <div style={itemsContainerStyle}>
            {items.map((item) => (
                <Item
                    key={item.id} // La key se queda aquí para React
                    name={item.name}
                    description={item.description}
                    image={item.image}
                />
            ))}
        </div>
    );
}


// Estilos del componente ItemList
const itemsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    justifyContent: 'center',
};


export default ItemList;
