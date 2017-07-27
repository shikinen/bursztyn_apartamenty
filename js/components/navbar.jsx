import React from 'react';
import Navbar from './navbar.jsx';


class Header extends React.Component {
    render() { 
        return (
                <nav className="site-nav">
                    <ul className="site-links">
                        <li key="1"><a href="record.html">Pokoje</a></li>
                        <li key="2"><a href="#">Atrakcje</a></li>
                        <li key="3"><a href="#">O nas</a></li>
                        <li key="4"><a href="#">Kontakt</a></li>
                        <li key="5"><a href="tel:0048913212507"><span className="special-sea">91 321 25 07</span></a></li>
                    </ul>
                </nav>
        );
    }
};

export default Header;