// @flow
import { createAction, createReducer } from 'redux-act';
import { combineReducers } from 'redux';

export const fetchNearbyOrders = createAction('Fetches all nearby orders');

export const fetchNearbyOrdersSuccess = createAction('Successfully fetched all nearby orders');
export const fetchNearbyOrdersSuccessReducer = (state, orders) => ({
    ...state,
    orders,
});

export default createReducer({
    [fetchNearbyOrdersSuccess]: fetchNearbyOrdersSuccessReducer,
}, {});
