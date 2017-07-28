import React from 'react';
import Navbar from './navbar.jsx';
import Logo from './logo.jsx';

class Header extends React.Component {
    render() { 
        return (
            <header className="header">
                <Logo />

                <Navbar />
            </header>
        );
    }
};

export default Header;