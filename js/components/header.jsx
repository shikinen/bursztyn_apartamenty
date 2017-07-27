import React from 'react';
import Navbar from './navbar.jsx';
import Logo from './logo.jsx';

class Header extends React.Component {
    render() { 
        return (
            <header className="main-header">
            <div className="container">
                <div className="header-content">
                    <Logo />
                    <Navbar />
                </div>
            </div>
        </header>
        );
    }
};

export default Header;