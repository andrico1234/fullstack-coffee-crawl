import axios from 'axios';

export const FETCH_LOCATION_LIST = 'fetch_location_list';

const ROOT_URL = 'http://localhost:5000/api';

export function fetchLocation() {
    const request = axios.get(`${ROOT_URL}/locations`);

    return {
        type: FETCH_LOCATION_LIST,
        payload: request
    };
}