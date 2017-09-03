import React, { Component } from 'react';

class GenericPage extends Component {
    render() {
        return(
            <div className="generic-page-wrapper">
                <h1 className="title">About</h1>
                <p className="subtitle">Welcome to...</p>
                <p className="content">this is all about...</p>
            </div>
        );
    }
}

export default GenericPage;