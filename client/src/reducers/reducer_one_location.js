import {FETCH_SINGLE_LOCATION} from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_SINGLE_LOCATION:
            return action.payload.data;
        default:
            return state;
    }
}