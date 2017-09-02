import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header>
                {/*get data from json, set it to props*/}
                <h1>Home</h1>
                <p>Crawl through some good stuff</p>
            </header>
        )
    }
}

export default Header;