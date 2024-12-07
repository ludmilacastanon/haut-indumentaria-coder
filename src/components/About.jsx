// src/components/About.jsx
import React from 'react';

function About() {
    return (
        <div style={pageStyle}>
            <h2>About Us</h2>
            <p>Somos una tienda dedicada a ofrecer la mejor indumentaria y estilo para ti.</p>
        </div>
    );
}

const pageStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px auto',
    width: '90%',
    color: '#333',
};

export default About;