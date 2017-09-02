import React, { Component } from 'react';

class ReviewContainer extends Component {
    render() {
        return(
            <div className="review-container">
                <h3 className="header">Customer Reviews</h3>
                <a href="/location/{{_id}}/review/new">
                    <p className="button">Add Review</p>
                </a>
                {/*start review for each*/}
                <div className="review">
                    <div className="review-info">
                        <span>Andrico</span> <span>123</span>
                        <span>123/5</span>
                    </div>
                    <p className="comment">Good place</p>
                </div>
                {/*end review fro each*/}
            </div>
        );
    }
}

export default ReviewContainer;