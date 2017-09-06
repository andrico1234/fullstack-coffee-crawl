import {FETCH_LOCATION_LIST} from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_LOCATION_LIST:
            return action.payload.data;
        default:
            return state;
    }
}