import React, { Component } from 'react';

class LocationContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="rating-address">
                        <p>123 fake street</p>
                    </div>
                    <div className="opening-hours">
                        <h3 className="header">Opening Hours</h3>
                        <p>Mon - Fri: 123</p>
                        <p>Sat: 456</p>
                        <p>Sun: 789</p>
                    </div>
                    <div className="facilities">
                        <h3 className="header">Facilities</h3>{/*for each facilities*/}
                        <span>this</span> {/*end for each facilities*/}
                    </div>
                    <div className="map">
                        <h3 className="header">Location Map</h3>
                        <iframe frameborder="0" src="https://www.google.co.uk/maps/embed/v1/place?key=AIzaSyBE9cgGx0m_7Us1rJSjyLUmzEk8TZWnKqY&q={{coords.[0]}},{{coords.[1]}}"></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationContainer;
