import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchLocation} from '../../actions';
import LocationComponent from './location_detail_location_component';
import ReviewComponent from './location_detail_review_component';
import Sidebar from '../sidebar/sidebar';

class LocationDetail extends Component {
    componentDidMount() {
        this.props.fetchLocation(this.props.match.params.id);
    }

    render() {
        const locationDetails = typeof this.props.data.location === 'undefined' ? {} : this.props.data.location;

        const locationReviews = _.map(locationDetails.reviews, (review, index) => {
            return <ReviewComponent key={index} review={review}/>
        });

        return (
            <div className="location-detail-wrapper">
                <LocationComponent location={locationDetails}/>

                <div className="review-container">
                    <h3 className="header">Customer Reviews</h3>
                    <a href={`/location/${this.props.match.params.id}/review/new`}>
                        <p className="button">Add Review</p>
                    </a>
                    {locationReviews}
                </div>

                <Sidebar />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {data: state.singleLocation};
}

export default connect(mapStateToProps, {fetchLocation})(LocationDetail);