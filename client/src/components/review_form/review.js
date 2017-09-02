import React, { Component } from 'react';

import Form from './review_form';
import Header from './review_header';


class Review extends Component {
    render() {
        return(
            <div className="location-review-form-wrapper">
                <Header/>
                <Form/>
            </div>
        );
    }
}

export default Review;