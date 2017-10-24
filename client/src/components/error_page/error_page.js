import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        const windowHeight = window.innerHeight - 213;

        return(
            <div className="generic-page-wrapper" style={{minHeight: windowHeight + 'px'}}>
                <h1 className="title">404</h1>
                <h2 className="subtitle">Page Not Found</h2>
                <p className="content">Line x of file y</p>
            </div>
        );
    }
}

export default ErrorPage;