import {FETCH_SINGLE_LOCATION} from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_SINGLE_LOCATION:

            if (typeof action.payload.data === 'undefined') {
                window.location = '/error';
                return state;
            }

            return action.payload.data;
        default:
            return state;
    }
}