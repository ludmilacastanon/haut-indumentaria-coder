import React from 'react';

function Contact() {
    return (
        <div style={pageStyle}>
            <h2>Contact Us</h2>
            <p>Puedes contactarnos a través de nuestro correo: contacto@hautindumentaria.com</p>
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
};

export default Contact;
