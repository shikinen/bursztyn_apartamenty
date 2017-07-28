import React from 'react';
import Navbar from './navbar.jsx';


class Header extends React.Component {
    render() { 
        return (
            <nav className="site-nav">
                <ul className="site-nav__list">
                    <li className="site-nav__item"><a href="record.html">Pokoje</a></li>
                    <li className="site-nav__item"><a href="#">Atrakcje</a></li>
                    <li className="site-nav__item"><a href="#">O nas</a></li>
                    <li className="site-nav__item"><a href="#">Kontakt</a></li>
                    <li className="site-nav__item"><a href="tel:0048913212507"><span className="special-sea">91 321 25 07</span></a></li>
                </ul>
            </nav>
        );
    }
};

export default Header;