import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <h3 className="nav-header">
                    <a className="nav-logo" href="/">Cafe Crawl</a>
                </h3>
                <ul className="nav-list">
                    <li className="nav-listitem">
                        <a href="/">Home</a>
                    </li>
                    <li className="nav-listitem">
                        <a href="http://andri.co">Other Stuff</a>
                    </li>
                    <li className="nav-listitem">
                        <a href="/about/">About</a>
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