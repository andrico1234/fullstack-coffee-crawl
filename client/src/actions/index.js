import axios from 'axios';

export const FETCH_LOCATION_LIST = 'fetch_location_list';
export const FETCH_SINGLE_LOCATION = 'fetch_single_location';

const ROOT_URL = 'http://localhost:5000/api';

export function fetchLocations() {
    const request = axios.get(`${ROOT_URL}/locations`);

    return {
        type: FETCH_LOCATION_LIST,
        payload: request
    };
}

export function fetchLocation(id) {
    const request = axios.get(`${ROOT_URL}/locations/${id}`);

    return {
        type: FETCH_SINGLE_LOCATION,
        payload: request
    }
}