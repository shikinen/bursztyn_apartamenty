import React from 'react';

class Logo extends React.Component {
    render() { 
        return (
            <a href="index.html" className="header__logo">
                <img src="images/logo-420-90-retina.png" alt="Logo Bursztyn" height="45px" width="210px" />
            </a>
        );
    }
};

export default Logo;

