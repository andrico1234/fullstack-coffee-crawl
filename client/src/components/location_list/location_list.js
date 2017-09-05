import axios from 'axios';
import React, {Component} from 'react';

import Header from './location_list_header';
import LocationListItem from './location_list_item';
import Sidebar from '../sidebar/sidebar';

class LocationList extends Component {
    constructor(props) {
        super(props);

        this.getData();

        this.state = {
            data: {
                location: []
            }
        };
    };

    getData() {
        axios.get('http://localhost:5000/api/locations').then((response) => {
            const {data} = response;
            this.setState({data});
        });
    }

    render() {
        const locationListItems = this.state.data.location.map((uniqueLocations) => {
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

export default LocationList;