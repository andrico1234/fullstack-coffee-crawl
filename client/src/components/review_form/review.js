import React, { Component } from 'react';

import Form from './review_form';
import Header from './review_header';

class ReviewFormComponent extends Component {
    render() {
        return (
            <div className="location-review-form-wrapper">
                <Header/>
                <Form close={this.props.close} params={this.props.params}/>
            </div>
        );
    };
}

export default ReviewFormComponent;