import React from 'react';

const LocationLoading = () => {
    return (
        <div className="single-location-loading">
            <header className="loading-header"></header>
            <div className="container">
                <div className="wrapper">
                    <div className="opening-hours preload">
                        <h3 className="header">Opening Hours</h3>
                    </div>
                    <div className="facilities preload">
                    </div>
                    <div className="map preload">
                        <h3 className="header">Location Map</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LocationLoading;