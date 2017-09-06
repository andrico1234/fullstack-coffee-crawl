import React, {Component} from 'react';

import Header from './location_detail_header';
import LocationComponent from './location_detail_location_component';
import ReviewComponent from './location_detail_review_component';
import Sidebar from '../sidebar/sidebar';

class LocationDetail extends Component {
    render() {
        return (
            <div className="location-detail-wrapper">
                <Header />
                <LocationComponent />
                <ReviewComponent />
                <Sidebar />
            </div>
        );
    };
}

export default LocationDetail;