import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return(
            <div className="generic-page-wrapper">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <pre>Line x of file y</pre>
            </div>
        );
    }
}

export default ErrorPage;