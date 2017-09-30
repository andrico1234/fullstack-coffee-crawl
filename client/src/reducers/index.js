import {combineReducers} from 'redux';

import LocationReducer from './reducer_location';
import ReviewReducer from './reducer_reviews';

const rootReducer = combineReducers({
    locations: LocationReducer,
    reviews: ReviewReducer
});

export default rootReducer;