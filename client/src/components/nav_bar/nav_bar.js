import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <h3 className="nav-header">
                    <Link className="nav-logo" to="/">Cafe Crawl</Link>
                </h3>
                <ul className="nav-list">
                    <li className="nav-listitem">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-listitem">
                        <a href="http://andri.co">Other Stuff</a>
                    </li>
                    <li className="nav-listitem">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div className="nav-burger-container" data-toggle="collapse" data-target=".navbar-main">
                    <img className="nav-burger" alt="burger menu" src="/images/burger-menu.svg"/>
                </div>
            </nav>
        );
    }
}

export default NavBar;