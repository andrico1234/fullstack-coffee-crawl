import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchLocations} from '../../actions';
import Header from './location_list_header';
import LocationListItem from './location_list_item';
import LocationListItemLoading from './location_list_item_loading';
import Sidebar from '../sidebar/sidebar';

class LocationList extends Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
            returnLocations: [],
            searchVal: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchLocations().then(() => {
            this.setState({
                isLoaded: true,
                returnLocations: this.props.data.location
            });
        });
    }

    handleChange(event) {
        this.setState({searchVal: event.target.value}, () => {
            if (this.state.searchVal.length >= 2) {
                this.setState({
                    returnLocations: _.filter(this.props.data.location, (uniqueLocations) => {
                        return uniqueLocations.title.toLowerCase().includes(this.state.searchVal.toLowerCase())
                    })
                });
            } else {
                this.setState({returnLocations: this.props.data.location});
            }
        });
    }

    sidebarContent = 'Brockley is known for it’s incredible cafes and restaurants. Spend an afternoon discovering some of the local establishments, soaking in the personality and drinking the excellent coffee.';

    render() {
        const locationListItemLoaded = _.map(this.state.returnLocations, (uniqueLocations) => {
            return <LocationListItem key={uniqueLocations._id} location={uniqueLocations}/>
        });

        const locationListItems = !this.state.isLoaded ?
            <LocationListItemLoading/> : locationListItemLoaded;

        return (
            <div className="location-wrapper">
                <Header/>
                <div className="location-content-wrapper">
                    <div className="search-bar-container">
                        <input value={this.state.searchVal} placeholder="Search" onChange={this.handleChange}/>
                    </div>
                    <div className="location-list-sidebar-wrapper">
                        <div className="list-wrapper">
                            {locationListItems}
                        </div>
                    </div>
                    <Sidebar content={this.sidebarContent}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {data: state.locations};
}

export default connect(mapStateToProps, {fetchLocations})(LocationList);