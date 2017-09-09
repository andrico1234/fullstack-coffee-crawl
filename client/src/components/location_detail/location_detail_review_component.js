import React from 'react';

const ReviewComponent = ({review}) => {
    if (typeof review === 'undefined') {
        return <div>Loading...</div>;
    }

    return (
        <div className="review">
            <div className="review-info">
                {/*gotsta add that date once server is fixed*/}
                <span>{review.reviewerName}</span> <span>{}</span> <span>{review.rating}/5</span>
            </div>
            <p className="comment">{typeof review.reviewText === 'undefined' ? '' : review.reviewText}</p>
        </div>
    );
};

export default ReviewComponent;