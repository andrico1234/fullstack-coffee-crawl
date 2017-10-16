import React from 'react';

const LocationLoading = () => {
    return (
        <div className="single-location-loading">
            <header className="loading-header">
                <h1></h1>
            </header>

            <div className="container">
                <div className="wrapper">
                    <div className="opening-hours">
                        <h3 className="header">Opening Hours</h3>
                    </div>
                    <div className="facilities">
                    </div>
                    <div className="map">
                        <h3 className="header">Location Map</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LocationLoading;