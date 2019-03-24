import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';

const rootReducer = combineReducers({
    store: fetchReducer,
});

export default rootReducer;
