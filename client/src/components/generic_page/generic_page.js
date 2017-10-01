import React, {Component} from 'react';

class GenericPage extends Component {
    render() {
        const windowHeight = window.innerHeight - 213;

        return (
            <div className="generic-page-wrapper" style={{minHeight: windowHeight + 'px'}}>
                <h1 className="title">About</h1>
                <p className="subtitle">Welcome to...</p>
                <p className="content">this is all about...</p>
            </div>
        );
    }
}

export default GenericPage;