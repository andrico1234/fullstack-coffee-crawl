import React from 'react';

import Form from './review_form';
import Header from './review_header';

const ReviewFormComponent = () => {
    return (
        <div className="location-review-form-wrapper">
            <Header/>
            <Form/>
        </div>
    );
};

export default ReviewFormComponent;