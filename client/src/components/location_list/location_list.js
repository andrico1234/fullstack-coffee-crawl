import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchLocations} from '../../actions';
import Header from './location_list_header';
import LocationListItem from './location_list_item';
import Sidebar from '../sidebar/sidebar';

class LocationList extends Component {
    componentDidMount() {
        this.props.fetchLocations();
    }

    render() {
        const locationListItems = _.map(this.props.data.location, uniqueLocations => {
            return <LocationListItem key={uniqueLocations._id} location={uniqueLocations}/>
        });

        return (
            <div className="location-wrapper">
                <Header />
                <div className="location-list-sidebar-wrapper">
                    <div className="list-wrapper">
                        {locationListItems}
                    </div>
                </div>
                <Sidebar />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {data: state.locationList};
}

export default connect(mapStateToProps, {fetchLocations})(LocationList);