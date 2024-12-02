import React from 'react';

function Item({ name, description, image }) {
    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = '#000';
        e.target.style.color = '#fff';
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = '#fff';
        e.target.style.color = '#000';
    };

    return (
        <div style={itemStyle}>
            <img src={image} alt={name} style={imageStyle} />
            <p style={nameStyle}>{name}</p>
            <p style={descriptionStyle}>{description}</p>
            <button
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Ver más
            </button>
        </div>
    );
}

// Estilos del componente Item
const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#282c34',
    border: '1px solid #333',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    color: '#fff',
    height: '250px',
};

const imageStyle = {
    width: '80px',
    height: '120px',
    borderRadius: '5px',
    marginBottom: '10px',
};

const nameStyle = {
    margin: '5px 0',
    fontSize: '16px',
    fontWeight: 'bold',
};

const descriptionStyle = {
    margin: '5px 0',
    fontSize: '14px',
    fontStyle: 'italic',
    color: '#ccc',
};

const buttonStyle = {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#fff',
    color: '#000',
    border: '2px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
};

export default Item;
