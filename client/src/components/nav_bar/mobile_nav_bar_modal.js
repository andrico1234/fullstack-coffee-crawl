import React from 'react';
import {Link} from 'react-router-dom';

const MobileNavBarModal = (props) => {
    return (
        <div className="mobile-nav-container">
            <div className="mobile-nav-list">
                <Link onClick={props.close} to="/">Home</Link>
                <a href="http://andricokaroulla.com">Other Stuff</a>
                <Link onClick={props.close} to="/about">About</Link>
            </div>
        </div>
    )
};

export default MobileNavBarModal;