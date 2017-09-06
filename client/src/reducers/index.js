import {combineReducers} from 'redux';

import LocationListReducer from './reducer_location_list';

const rootReducer = combineReducers({
    locationList: LocationListReducer
});

export default rootReducer;