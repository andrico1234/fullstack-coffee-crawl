import React, {Component} from 'react';

import Header from './location_detail_header';
import LocationContainer from './location_detail_location_container';
import ReviewContainer from './location_detail_review_container';
import Sidebar from '../sidebar/sidebar';

class LocationDetail extends Component {
    render() {
        return (
            <div className="location-detail-wrapper">
                <Header />
                <LocationContainer />
                <ReviewContainer />
                <Sidebar />
            </div>
        );
    };
}

export default LocationDetail;