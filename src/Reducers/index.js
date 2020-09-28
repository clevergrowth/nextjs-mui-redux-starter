/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux";

import repos from './repos'


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

const rootReducer = combineReducers({
    repos: repos
});

export default rootReducer;
