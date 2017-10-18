import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';

import {fetchLocation} from '../../actions';
import LocationComponent from './location_detail_location_component';
import ReviewComponent from './location_detail_review_component';
import ReviewFormComponent from '../review_form/review';
import Sidebar from '../sidebar/sidebar';

class LocationDetail extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        };

        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    };

    closeModal() {
        this.setState({showModal: false});
    }

    componentDidMount() {
        this.props.fetchLocation(this.props.match.params.id);
    }

    openModal() {
        this.setState({showModal: true});
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
                    <p onClick={this.openModal} className="button">Add Review</p>
                    {locationReviews}
                </div>

                <ReactModal className="modal" overlayClassName="review-modalOverlay" isOpen={this.state.showModal} onRequestClose={this.closeModal} contentLabel="Review Modal">
                    <ReviewFormComponent close={this.closeModal} params={this.props.match.params.id} />
                </ReactModal>

                <Sidebar content={locationDetails.sidebar} />
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {data: state.locations};
}

export default connect(mapStateToProps, {fetchLocation})(LocationDetail);