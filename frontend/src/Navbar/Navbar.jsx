

import React from 'react';

function Navbar() {
    const navbar = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#363636',
        padding: '5px 10px'
    };

    const Sigrex = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    const Accueil = {
        backgroundColor: '#0F7DEB',
        border: 'none',
        color: 'white',
        padding: '5px 10px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '5px'
    };

    return (
        <nav style={navbar}>
            <div>
                <a href="/" style={Sigrex}>Sigrex</a>
            </div>
            <div>
                <a href="/" style={Accueil}>Accueil</a>
            </div>
        </nav>
    );
}

export default Navbar;