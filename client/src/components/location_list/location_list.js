import React, {Component} from 'react';

import Header from './location_list_header';
import Sidebar from '../sidebar/sidebar';
//import fake_homepage from '../../seed/fake_homepage.json';

class LocationList extends Component {
    render() {
        return (
            <div className="location-wrapper">
                <Header />

                <div className="location-list-sidebar-wrapper">
                    <div className="list-wrapper">
                        <div className="error"></div>
                        {/*begin iteration*/}
                        <div className="list-item">
                            <a href="/location/{{_id}}"><h3 className="name">Brockley mess</h3></a>
                            <p className="address">123 fake street</p>{/*iterate through facilities <span>coffee</span>*/}
                            <p className="stop">No.1</p>
                        </div>
                        {/*end iteration*/}
                    </div>
                </div>

                <Sidebar />
            </div>
        );
    }
}

export default LocationList;