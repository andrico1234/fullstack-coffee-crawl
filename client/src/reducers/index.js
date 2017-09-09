import {combineReducers} from 'redux';

import LocationListReducer from './reducer_location_list';
import SingleLocationReducer from './reducer_one_location';

const rootReducer = combineReducers({
    locationList: LocationListReducer,
    singleLocation: SingleLocationReducer
});

export default rootReducer;