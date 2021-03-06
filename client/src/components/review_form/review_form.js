import React, {Component} from 'react';
import {connect} from 'react-redux';

import {postReview} from '../../actions';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            rating: 5,
            review: '',
            validationHidden: true,
            validationMessage: ''
        };

        this.postReview = this.postReview.bind(this);
    }

    postReview(e) {
        e.preventDefault();

        if (this.state.name === '') {
            this.setState({
                validationHidden: false,
                validationMessage: 'Please enter a name'
            });
        } else {
            const values = {
                rating: this.state.rating,
                reviewBody: this.state.review,
                reviewerName: this.state.name
            };

            this.props.postReview(values, this.props.params).then(() => {
                window.location = `/location/${this.props.params}`;
            }).catch(() => {
                this.setState({
                    validationHidden: false,
                    validationMessage: 'Was unable to post message'
                });
            });
        }
    }

    render() {
        return (
            <div className="form-wrapper">
                <p className={`error-message  ${this.state.validationHidden ? 'hidden' : ''}`}>{this.state.validationMessage}</p>
                <form className="review-form" onSubmit={this.postReview}>
                    <fieldset>
                        <label>Name</label>

                        <input onChange={event => this.setState({name: event.target.value})}
                               placeholder="Required" type="text" id="name" name="name"
                               aria-required="true"/>

                        <label>Rating</label>
                        <select onChange={event => this.setState({rating: event.target.value})}
                                name="rating" id="rating">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>

                        <label>Review</label>
                        <textarea onChange={event => this.setState({review: event.target.value})}
                                  name="review" rows="5"></textarea>
                        <button type="submit" value="Submit">Add My Review</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {data: state.reviews}
}

export default connect(mapStateToProps, {postReview})(Form);