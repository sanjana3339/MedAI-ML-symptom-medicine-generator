import React from 'react';
import { useLocation } from 'react-router-dom';

function After() {
    const location = useLocation();
    const { suggestion } = location.state || {};
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/44/71/59/360_F_644715970_ms6pbT1zagBprZPT0mv9yoAgi2zJ4U2c.jpg")',
        backgroundSize: 'cover',
        fontFamily: 'Arial, sans-serif',
    };

    const formContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '32px',
        borderRadius: '10px',
        textAlign: 'center',
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h1>SUGGESTION:</h1>
                <br/>
                <br/>
                <h2>{suggestion}</h2>
                
            </div>
        </div>
    );
}

export default After;
