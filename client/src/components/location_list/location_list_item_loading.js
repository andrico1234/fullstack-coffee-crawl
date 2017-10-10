import React from 'react';

const LocationListItemLoading = () => {
    return (
        <div className="list-item waiting">
            <h3 className="name">Loading...</h3>
            <p className="address">please wait</p>
            <div>
                <span className="loading one"></span>
                <span className="loading two"></span>
                <span className="loading three"></span>
            </div>
        </div>
    );
};

export default LocationListItemLoading;