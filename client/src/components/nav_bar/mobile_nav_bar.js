import React from 'react';
import {Link} from 'react-router-dom';

const MobileNavBar = () => {
    return (
        <div id="mobile-navbar-wrapper">
            <ul className="mobile-nav-list">
                <li className="mobile-nav-listitem">
                    <Link to="/">Home</Link>
                </li>
                <li className="mobile-nav-listitem">
                    <a href="http://andricokaroulla.com">Other Stuff</a>
                </li>
                <li className="mobile-nav-listitem">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
};

export default MobileNavBar;