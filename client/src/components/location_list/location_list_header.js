import React from 'react';

import headerImg from '../../images/brockley.png';

const Header = () => {
    return (
        <header>
            <img className="hero-image" src={headerImg} alt="hero logo"/>
            <p>Crawl through some good stuff</p>
        </header>
    );
};

export default Header;