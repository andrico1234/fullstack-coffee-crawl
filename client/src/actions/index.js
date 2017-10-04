import axios from 'axios';

export const FETCH_LOCATION_LIST = 'fetch_location_list';
export const FETCH_SINGLE_LOCATION = 'fetch_single_location';
export const POST_SINGLE_REVIEW = 'post_single_review';

const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'https://brockleycafecrawl.herokuapp.com/api';

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

export function postReview(review, id) {
    const request = axios.post(`${ROOT_URL}/locations/${id}/reviews`, review);

    return {
        type: POST_SINGLE_REVIEW,
        payload: request
    }
}