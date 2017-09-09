import React from 'react';

const LocationComponent = ({location}) => {
    if (typeof location.address === 'undefined') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <header>
                <h1>{location.title}</h1>
                <h3>{location.rating}/5</h3>
            </header>

            <div className="container">
                <div className="wrapper">
                    <div className="rating-address">
                        <p>{location.address}</p>
                    </div>
                    <div className="opening-hours">
                        <h3 className="header">Opening Hours</h3>
                        <p>Mon - Fri: {location.openingHours.monFri}</p>
                        <p>Sat: {location.openingHours.sat}</p>
                        <p>Sun: {location.openingHours.sun}</p>
                    </div>
                    <div className="facilities">
                        <h3 className="header">Facilities</h3>{location.facilities.map((facility, index) =>
                        <span key={index}>{facility}</span>)}
                    </div>
                    <div className="map">
                        <h3 className="header">Location Map</h3>
                        <iframe title="googlemaps" frameBorder="0" src={`https://www.google.co.uk/maps/embed/v1/place?key=AIzaSyBE9cgGx0m_7Us1rJSjyLUmzEk8TZWnKqY&q=${location.coords[0]},${location.coords[1]}`}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationComponent;
