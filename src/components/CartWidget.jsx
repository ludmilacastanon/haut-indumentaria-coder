// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
    return (
    <div style={cartStyle}>
        <span>🛒</span>
        <span>(0)</span>
    </div>
    );
};

const cartStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '18px',
};

export default CartWidget;
