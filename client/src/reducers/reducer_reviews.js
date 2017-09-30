import {POST_SINGLE_REVIEW} from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {
        case POST_SINGLE_REVIEW:
            return action.payload.data;
        default:
            return state;
    }
}