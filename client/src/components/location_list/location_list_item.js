import React from 'react';

const LocationListItem = ({location}) => {
    if (!location) {
        return <div>Loading...</div>;
    }

    return (
        <div className="list-item">
            <a href={`/location/${location._id}`}><h3 className="name">{location.title}</h3>
                <p className="address">{location.address}</p>
                <div>
                    {location.facilities.map((facility, index) =>
                        <span key={index}>{facility}</span>)}
                </div>
                <p className="stop">{location.stop}</p>
            </a>
        </div>
    );
};

export default LocationListItem;